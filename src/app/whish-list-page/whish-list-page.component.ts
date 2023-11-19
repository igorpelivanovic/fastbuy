import { Component, OnInit } from '@angular/core';
import { faHeart, faChevronDown, faCheck, faTrash, faMinus, faPlus, faExclamation } from '@fortawesome/free-solid-svg-icons';
import { WhishlistService } from '../services/whishlist.service';
import { WhishListElement } from '../interfaces/whishlist';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { cartListElement } from '../interfaces/cart';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-whish-list-page',
  templateUrl: './whish-list-page.component.html',
  styleUrls: ['./whish-list-page.component.scss']
})
export class WhishListPageComponent implements OnInit {

  protected actionsForm = [
    {label: "add to cart", value: true},
    {label: "remove", value: false},
  ]

  private icons = {
    faHeart: faHeart,
    faChevronDown: faChevronDown,
    faCheck: faCheck,
    faTrash: faTrash,
    faMinus: faMinus,
    faPlus: faPlus,
    faExclamation: faExclamation
  }
  protected showAction: boolean = false
  protected formWhishList !: FormGroup

  constructor(private whishlistService: WhishlistService, private formBuilder: FormBuilder, private cartService: CartService) { }

  ngOnInit(): void {
    this.initForm()
  }
  get whishlistItems():WhishListElement[]{
    return this.whishlistService.data
  }
  get icon(){
    return this.icons
  }
  get items(){
    return this.formWhishList.get('items') as FormArray
  }
  get emptyWhishList():boolean{
    return this.whishlistItems.length == 0
  }
  get formActionOption():any{
    return this.actionsForm.find(action => action.value == this.formWhishList.get('action')?.value)
  }
  private currentQuanityFormIndex(i: number): number{
    return this.items.at(i).get('quanity')?.value || 1
  }

  private initForm():void{
    this.formWhishList = this.formBuilder.group({
      action: new FormControl(true),
      items: this.formBuilder.array(this.whishlistItems.map(item=>new FormGroup({
        checked: new FormControl(false),
        quanity: new FormControl(item.quanity)
      })))
    })
  }
  submitForm():void{
    let action = this.formWhishList.get('action') as FormControl
    for(let i = 0; i < this.items.controls.length; i++){
      if(this.items.controls[i].value.checked){
        action.value ? this.addOneToCart(i) : this.removeItemFormWhishList(i)
        i--
      }
    }
      
  }
  removeItemFormWhishList(index: number):void{
    this.items.removeAt(index)
    this.whishlistService.removeData(this.whishlistItems[index].id)
  }
  decrementQuanity(i: number):void{
    if(this.currentQuanityFormIndex(i) <= 1) return
    this.items.at(i).get('quanity')?.setValue(this.currentQuanityFormIndex(i)-1)
    this.whishlistService.updateQuanity(this.currentQuanityFormIndex(i), this.whishlistItems[i].id)
  }
  incrementQuanity(i: number):void{
    this.items.at(i).get('quanity')?.setValue(this.currentQuanityFormIndex(i)+1)
    this.whishlistService.updateQuanity(this.currentQuanityFormIndex(i), this.whishlistItems[i].id)
  }
  addOneToCart(i:number):void{
    let item = this.whishlistItems[i] as cartListElement
    this.removeItemFormWhishList(i)
    this.cartService.addData(item)
  }
  removeAllFromWhishList():void{
    this.whishlistService.removeAllData()
  }
  addAllToCart():void{
    this.cartService.addManyData(this.whishlistItems as cartListElement[])
    this.removeAllFromWhishList()
  }
  toggleShowOptions(val:any):void{
    this.showAction = val
  }
}
