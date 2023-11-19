import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription, forkJoin } from 'rxjs';
import { DataService } from '../services/data.service';
import { faChevronLeft, faMinus, faPlus, faHeart, faChevronRight, faUser, faCommentSlash } from '@fortawesome/free-solid-svg-icons';
import { Comments, Product } from '../interfaces/datas';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { WhishlistService } from '../services/whishlist.service';
import { CartService } from '../services/cart.service';
import { Title } from '@angular/platform-browser';
import { AppName } from 'src/environments/environment';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent implements OnInit, OnDestroy {

  private paramsSubscription !: Subscription
  private dataSubscription !: Subscription
  private commentSubscription = new Subscription()
  private formChangeValueSubscription = new Subscription()
  private product !: Product
  private comments : any[] = []
  protected countOfFullCommments : number = 0
  private skipComments: number = 0
  private getCountComments : number = 10
  protected cartForm !: FormGroup
  protected loadingComments: boolean = false
  protected loading : boolean = false
  private isError: boolean = false

  private id !: string 
  private icons = {
    faChevronLeft: faChevronLeft,
    faChevronRight: faChevronRight,
    faMinus: faMinus,
    faPlus: faPlus,
    faHeart: faHeart,
    faUser: faUser,
    faCommentSlash: faCommentSlash
  }

  @ViewChild("commentsBox") commentsBox !: ElementRef<HTMLElement>
  constructor(private formBuidler: FormBuilder, private route: ActivatedRoute, private dataService: DataService, private whishlistService: WhishlistService, private cartService: CartService, private title: Title) { }

  ngOnInit(): void {
    this.paramsSubscription = this.route.params.subscribe({
      next: (data)=>{
        this.id = data['id']
        this.getProductData(this.id)
      }
    })
  }
  ngOnDestroy(): void {
    this.paramsSubscription.unsubscribe()
    this.dataSubscription.unsubscribe()
    this.commentSubscription.unsubscribe()
    this.formChangeValueSubscription.unsubscribe()
  }

  get icon(){
    return this.icons
  }
  get productData(): Product{
    return this.product
  }
  get commentsData(): any[]{
    return this.comments
  }
  get fullLoadComments(): boolean{
    return this.countOfFullCommments <= this.comments.length
  }
  get quanityVal():number{
    return this.cartForm.get("quanity")?.value
  }
  get itemInWhishList():boolean{
    return this.whishlistService.hasData(this.product.id)
  }
  get requestError(): boolean{
    return this.isError
  }

  getProductData(id: string){
    if(this.loading) return
    this.loading = true
    this.dataSubscription = forkJoin([this.dataService.getSingleProduct(id), this.dataService.getComments(id, {skip: this.skipComments, limit: this.getCountComments})]).subscribe({
      next: ([productData, commentsData]: [Product, Comments])=>{
        this.fetchComments(commentsData)
        this.fetchProduct(productData)
        this.title.setTitle(`${productData.title} - ${AppName}`)
      },
      error: (err: HttpErrorResponse)=>{
        this.handleError(err)
        console.log(err)
      },
      complete: ()=>{
        this.loading = false
        this.cartFormInit()
      }
    })
  }
  
  getComments(limit = this.getCountComments):void{
    if(this.loadingComments) return
    this.loadingComments = true
    this.commentSubscription = this.dataService.getComments(this.id, {skip: this.skipComments, limit: limit}).subscribe({
      next: (data)=>{
        this.fetchComments(data)
      },
      complete: ()=>{
        this.loadingComments = false
      }
    })
  }

  private handleError(err: HttpErrorResponse): void{
    this.loading = false
    if(err.status == 404){
      this.isError = true
    }
  }

  private updateCommentParams(): void{
    this.skipComments = this.comments.length
  }
  private fetchProduct(data: Product): void{
    this.product = data
  }
  private fetchComments(data: Comments):void{
    this.comments.push(...data.comments)
    this.countOfFullCommments = data.total
    this.updateCommentParams()
  }
  private cartFormInit(): void{
    this.cartForm = this.formBuidler.group({
      quanity: new FormControl(this.generateDefaultQuanity())
    })
    this.formChangeValueSubscription = this.cartForm.valueChanges.subscribe((data)=>{
      if(this.itemInWhishList){
        this.whishlistService.updateQuanity(data.quanity, this.product.id)
      }
    })
  }

  private generateDefaultQuanity(): number{
    return this.whishlistService.getQuanityFromId(this.product.id)
  }
  

  increment():void{
    this.cartForm.setValue({
      quanity: this.quanityVal+1
    })
  }
  decrement():void{
    if(this.quanityVal == 1) return
    this.cartForm.setValue({
      quanity: this.quanityVal-1
    })
  }
  addToCart(): void{
    this.cartService.addData({
      id: this.product.id,
      title: this.product.title,
      price: this.product.price,
      quanity: this.cartForm.value.quanity,
      discountPercentage: this.product.discountPercentage,
      brand: this.product.brand,
      thumbnail: this.product.thumbnail
    })
  }
  goToCommentsBox():void{
    this.commentsBox.nativeElement.scrollIntoView({
      behavior: "smooth"
    })
  }
  toggleProductToWhishlist():void{
    this.whishlistService.toggleData({
      id: this.product.id,
      title: this.product.title,
      price: this.product.price,
      quanity: this.cartForm.value.quanity,
      date: new Date(),
      discountPercentage: this.product.discountPercentage,
      brand: this.product.brand,
      thumbnail: this.product.thumbnail
    })
  }

}
