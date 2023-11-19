import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { faCartShopping, faHeart, faStar } from '@fortawesome/free-solid-svg-icons';
import { Product } from '../interfaces/datas';
import { CarouselComponent } from './carousel/carousel.component';
import { Router } from '@angular/router';
import { WhishlistService } from '../services/whishlist.service';
import { CartService } from '../services/cart.service';


@Component({
  selector: 'app-item-preview',
  templateUrl: './item-preview.component.html',
  styleUrls: ['./item-preview.component.scss']
})
export class ItemPreviewComponent implements OnInit {

  private icons = {
    faCartShopping: faCartShopping,
    faHeart: faHeart,
    faStar: faStar
  }

  @Input("item") item!: Product;
  @ViewChild(CarouselComponent) carousel !: CarouselComponent

  constructor(private router : Router, private whishlistService: WhishlistService, private cartService: CartService) { }

  ngOnInit(): void {
  }

  get icon(){
    return this.icons
  }
  get itemInWhishList():boolean{
    return this.whishlistService.hasData(this.item.id)
  }
  leaveItem():void{
    this.carousel.clearAutoSlide()
  }
  enterItem():void{
    this.carousel.setAutoInterval()
  }
  goToProduct():void{
    this.router.navigate([`/product/${this.item.id}`])
  }
  addProductToCartList(event: Event): void{
    event.stopPropagation()
    this.cartService.addData({
      id: this.item.id,
      title: this.item.title,
      price: this.item.price,
      quanity: 1,
      discountPercentage: this.item.discountPercentage,
      brand: this.item.brand,
      thumbnail: this.item.thumbnail
    })
  }
  toggleProductToWhishlist(event: Event):void{
    event.stopPropagation()
    this.whishlistService.toggleData({
      id: this.item.id,
      title: this.item.title,
      price: this.item.price,
      quanity: 1,
      date: new Date(),
      discountPercentage: this.item.discountPercentage,
      brand: this.item.brand,
      thumbnail: this.item.thumbnail
    })
  }
}
