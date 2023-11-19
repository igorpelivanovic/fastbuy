import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { faCheck, faChevronLeft, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { cartListElement } from 'src/app/interfaces/cart';
import { DiscountPercentagePipe } from 'src/app/pipes/discount-percentage.pipe';
import { CartService } from 'src/app/services/cart.service';
import { DeliveryPriceService } from 'src/app/services/delivery-price.service';
import { ShowListCartService } from 'src/app/services/show-list-cart.service';

@Component({
  selector: 'app-order-summary',
  templateUrl: './order-summary.component.html',
  styleUrls: ['./order-summary.component.scss']
})
export class OrderSummaryComponent implements OnInit {

  @Input() formGroup !: FormGroup 

  private icons = {
    faCheck: faCheck,
    faShoppingCart: faShoppingCart,
    faChevronLeft: faChevronLeft
  }

  constructor(private deliveryPriceService: DeliveryPriceService, private cartService: CartService) { }

  ngOnInit(): void {
  }

  get shippingPrice(){
    return this.deliveryPriceService.shippingOpt
  }

  get cartItems(): cartListElement[]{
    return this.cartService.data
  }
  
  get subTotalValue(): number{
    return this.cartItems.reduce((prev, current, index)=>{
      return prev+= new DiscountPercentagePipe().transform(this.cartItems[index].price, this.cartItems[index].discountPercentage) * this.cartItems[index].quanity
    }, 0)
  }

  get shippingValue():number{
    return this.formGroup.get('price')?.value
  }

  get icon(){
    return this.icons
  }

}
