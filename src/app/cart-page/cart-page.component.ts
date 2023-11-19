import { Component, OnInit } from '@angular/core';
import { faHeart, faTrash, faMinus, faPlus, faCheck, faShoppingCart, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { CartService } from '../services/cart.service';
import { cartListElement } from '../interfaces/cart';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { DiscountPercentagePipe } from '../pipes/discount-percentage.pipe';
import { Router } from '@angular/router';
import { ShowListCartService } from '../services/show-list-cart.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss']
})
export class CartPageComponent implements OnInit {

  private icons = {
    faHeart: faHeart,
    faTrash: faTrash,
    faMinus: faMinus,
    faPlus: faPlus,
    faCheck: faCheck,
    faShoppingCart: faShoppingCart,
    faChevronLeft: faChevronLeft
  }

  private shippingOptions = [
    {id: 1, title: "standard delivery", price: 50},
    {id: 2, title: "premium delivery", price: 100}
  ]

  protected cartForm !: FormGroup

  protected activeAddressList: boolean = false


  constructor(private cartService: CartService, private formBuilder: FormBuilder, private showListCartService: ShowListCartService) { }

  ngOnInit(): void {
    this.initCartForm()
  }

  get icon(){
    return this.icons
  }

  get showItemsList():boolean{
    return this.showListCartService.showList
  }




  get cartListItems(): cartListElement[]{
    return this.cartService.data
  }
  get countCartListItems(): number{
    return this.cartService.countData
  }
  get itemsArr(): FormArray{
    return this.cartForm.get('items') as FormArray
  }
  get countCartItems(): number{
    return this.cartService.countData
  }
  get subTotalValue(): number{
    return this.itemsArr.controls.reduce((prev, current, index)=>{
      return prev+= new DiscountPercentagePipe().transform(this.cartListItems[index].price, this.cartListItems[index].discountPercentage) * current.value
    }, 0)
  }
  get shippingOption(): any {
    return this.shippingOptions
  }
  get shippingValue(): number{
    return this.cartForm.get('shippingPrice')?.value
  }

  private getItemsArrFromControl(index: number): FormControl{
    return this.itemsArr.controls[index] as FormControl
  }
  private initCartForm(): void{
    this.cartForm = this.formBuilder.group({
      items: this.formBuilder.array(this.cartListItems.map(item => new FormControl(item.quanity))),
      shippingPrice: new FormControl(this.shippingOption[0].price),
    })
  }
  private activeAddress(): void{
    this.activeAddressList = true
  }

  removeProduct(index: number): void{
    this.itemsArr.removeAt(index)
    this.cartService.removeData(this.cartListItems[index].id)
  }

  incrementQuanity(index: number): void{
    this.getItemsArrFromControl(index).setValue(this.getItemsArrFromControl(index).value+1)
    this.cartService.updateValue(this.cartListItems[index].id, this.getItemsArrFromControl(index).value)
  }

  decrementQuanity(index: number): void{
    if(this.getItemsArrFromControl(index).value <= 1) return
    this.getItemsArrFromControl(index).setValue(this.getItemsArrFromControl(index).value-1)
    this.cartService.updateValue(this.cartListItems[index].id, this.getItemsArrFromControl(index).value)
  }

  mainBtnAction(): void{
    if(this.activeAddressList){
      return
    }
    this.activeAddress()
  }

  deActiveAddress(): void{
    this.activeAddressList = false
  }
}
