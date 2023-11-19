import { animateChild, query, transition, trigger } from '@angular/animations';
import { DOCUMENT } from '@angular/common';
import { Component, HostListener, Inject, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { faBars, faShoppingCart, faUser, faXmarkCircle, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from 'src/app/services/auth.service';
import { CartService } from 'src/app/services/cart.service';


@Component({
  selector: 'app-header-bottom',
  templateUrl: './header-bottom.component.html',
  styleUrls: ['./header-bottom.component.scss'],
  animations: [
    trigger("animateMenuContainer", [
      transition(":enter", query("*",  animateChild())),
      transition(":leave", query("*" ,animateChild())),
    ])
  ]
})
export class HeaderBottomComponent implements OnInit {

  form!: FormGroup


  private icons = {
    faBars: faBars,
    faShoppingCart: faShoppingCart,
    faUser: faUser,
    faXmarkCircle: faXmarkCircle,
    faMagnifyingGlass: faMagnifyingGlass
  }
  protected showMenuContainer : boolean = false
  paramSubscribe: any;

  constructor(private fb: FormBuilder, private router: Router, private route : ActivatedRoute, @Inject(DOCUMENT) private document: Document, private cartService: CartService, private authService: AuthService ) { }

  @HostListener("window:resize", [])
  onResize(){
    if(this.document.defaultView?.innerWidth != undefined && this.document.defaultView?.innerWidth > 768){
      this.showMenuContainer = false
      this.document.body.style.overflow = "visible"
    }
    
  }

  ngOnInit(): void {
    this.createSearchForm()
  }
  get icon(){
    return this.icons
  }
  get countCartItem():number{
    return this.cartService.countData
  }

  get hasUser(): boolean{
    return this.authService.hasUser()
  }

  createSearchForm():void{
    this.form = this.fb.group({
      searchValue: new FormControl(this.route.snapshot.queryParams['q'] || "")
    })
    
  }

  singOutUser(): void{
    this.authService.removeUser()
    this.router.navigate(['/home'])
  }

  submitForm(){
    let searchVal = (this.form.value.searchValue).trim()
    if(searchVal.length > 0){
      this.router.navigate(["search"], {
        queryParams: {
          q : searchVal
        }
      })
    }
  }

}
