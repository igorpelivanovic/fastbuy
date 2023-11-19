import { Component, ElementRef, Inject, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription, of } from 'rxjs';
import { userData } from 'src/app/interfaces/account';
import { cartListElement } from 'src/app/interfaces/cart';
import { AccountService } from 'src/app/services/account.service';
import { AuthService } from 'src/app/services/auth.service';
import { CartService } from 'src/app/services/cart.service';
import { DeliveryPriceService } from 'src/app/services/delivery-price.service';
import { ShowListCartService } from 'src/app/services/show-list-cart.service';
import { Valid } from 'src/app/validators/validators';
import { faShoppingCart, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { AddressComponent } from './address/address.component';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-cart-sections',
  templateUrl: './cart-sections.component.html',
  styleUrls: ['./cart-sections.component.scss'],
  providers: [ShowListCartService]
})
export class CartSectionsComponent implements OnInit, OnDestroy {


  private icons = {
    faShoppingCart: faShoppingCart,
    faChevronLeft: faChevronLeft
  }

  protected cartForm !: FormGroup

  protected userData !: userData

  private userDataSub !: Subscription | undefined

  protected requestIsProccesing: boolean = false

  constructor(@Inject(DOCUMENT) private document : Document, private accountService: AccountService, private authService: AuthService, private formBuilder: FormBuilder, private cartService: CartService, private deliveryPriceService: DeliveryPriceService, private showListCartService: ShowListCartService) { }


  get formItemsArray():FormArray{
    return this.cartForm.get('items') as FormArray
  }

  get cartItems(): cartListElement[]{
    return this.cartService.data
  }

  get showListItems(): boolean{
    return this.showListCartService.showList
  }

  private toggleListCart():void{
    this.showListCartService.toggle()
  }

  get userLogin():boolean{
    return this.authService.hasUser()
  }

  get icon(){
    return this.icons
  }

  get formInvalid(): boolean{
    return this.cartForm.invalid
  }

  ngOnInit(): void {
    if(this.userLogin){
      this.getUserData()
      return
    }
    this.initCartForm()
  }

  ngOnDestroy(): void {
    this.userDataSub?.unsubscribe()
  }
  
  private getUserData(){
    this.requestIsProccesing = true
    this.userDataSub = this.accountService.getUserData().subscribe({
      next: (data)=>{
        this.userData = data
        this.requestIsProccesing = false
        this.initCartForm()
      }
    })
  }

  private initCartForm():void{
    this.cartForm = this.formBuilder.group({
      items: this.formBuilder.array( this.cartItems.map(item=> new FormGroup({
        id: new FormControl(item.id, [Validators.required, Valid.toBeValidNumber, Valid.trimValue()]),
        quanity: new FormControl(item.quanity, [Validators.required, Valid.toBeValidNumber, Valid.trimValue()])
      }))),
      shipping: new FormGroup({
        price: new FormControl(this.deliveryPriceService.shippingOpt[0].price)
      }),
      customerData: new FormGroup({
        hasUser: new FormControl(false),
        userData: this.shippingData()
      })
    })
    this.getCartFormControl('hasUser', ['customerData']).valueChanges.subscribe({
      next: (value)=>{
        this.checkShippingAddress(value)
      }
    })
    this.getCartFormControl('hasUser', ['customerData']).setValue(this.userLogin)
  }

  private checkShippingAddress(value: boolean){
    if(value){
      this.setAddressShipingFromUserData()
      return
    }
    this.resetAddressShiping()
  }

  private resetAddressShiping(){
    this.getCartFormGroup(['customerData', 'userData']).reset({
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      address: {
        address: "",
        city: "",
        postalCode: ""
      }
    })
  }

  private setAddressShipingFromUserData(){
    this.getCartFormGroup(['customerData', 'userData']).setValue({
      firstName: this.userData.firstName,
      lastName: this.userData.lastName,
      phone: this.userData.phone,
      email: this.userData.email,
      address: {
        address: this.userData.address.address,
        city: this.userData.address.city,
        postalCode: this.userData.address.postalCode
      }
    })
  }

  private shippingData(): FormGroup{
    return this.formBuilder.group({
        firstName: new FormControl("", [Validators.required, Valid.trimValue()]),
        lastName: new FormControl("", [Validators.required, Valid.trimValue()]),
        phone: new FormControl("", [Validators.required, Valid.trimValue(6), Validators.pattern("^([+-]{0,1}[ ]{0,1}[(]{0,1}[0-9]{1,4}[)]{0,1}[ ]{0,1}){0,4}$"), Validators.minLength(6),]),
        email: new FormControl("", [Validators.required, Valid.trimValue(), Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
        address: new FormGroup({
          address: new FormControl("", [Validators.required, Valid.trimValue()]),
          city: new FormControl("", [Validators.required, Valid.trimValue()]),
          postalCode: new FormControl("", [Validators.required, Valid.trimValue(), Validators.pattern("^[0-9]*$"),])
        })
    })
  }

  getCartFormGroup(groupNames: String[] = []): FormGroup{
    let formGroup : FormGroup = this.cartForm
    groupNames.map((str: String)=>{
      formGroup = formGroup.get(str as string) as FormGroup 
    })
    return formGroup
  }

  getCartFormControl(formControlName: string, groupNames: String[] = []):FormControl{
    return this.getCartFormGroup(groupNames).get(formControlName) as FormControl
  }

  private goToAddress(): void{
    this.toggleListCart();
    this.getCartFormControl('hasUser', ['customerData']).setValue(this.userLogin)  
  }

  private trimFormData(group: FormGroup = this.getCartFormGroup(['customerData', 'userData'])): void{
    Object.keys(group.controls).forEach((key: string)=>{
      if(group.get(key) instanceof FormControl) group.get(key)?.setValue(group.get(key)?.value.trim())
      else this.trimFormData(group.get(key) as FormGroup)
    })
  }

  private sendOrder(): void{
    this.trimFormData()
    this.cartService.sendOrder()
  }

  formSubmit(): void{
    this.document.defaultView?.scrollTo({
      top: 0,
      behavior: "smooth"
    })
    if(this.showListItems){
      this.goToAddress()
      return
    }
    if(this.cartForm.valid){
      this.sendOrder()
    }
  }
}
