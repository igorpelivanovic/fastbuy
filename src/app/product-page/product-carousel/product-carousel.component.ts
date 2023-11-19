import { AfterViewInit, Component, ElementRef, HostListener, Input, OnInit, QueryList, Renderer2, ViewChild, ViewChildren } from '@angular/core';
import { CarouselStandardElementDirective } from 'src/app/directives/carousel-standard-element.directive';

@Component({
  selector: 'app-product-carousel',
  templateUrl: './product-carousel.component.html',
  styleUrls: ['./product-carousel.component.scss']
})
export class ProductCarouselComponent implements OnInit, AfterViewInit {

  @Input("images") images!: String[]
  @ViewChild("carousel") carouselContainer !: ElementRef
  @ViewChild("carouselItem") carouselElement !: ElementRef
  @ViewChildren(CarouselStandardElementDirective) scrollableItems!: QueryList<CarouselStandardElementDirective>
  protected smallScreen: boolean = this.chechResponsive()
  protected addTransition: boolean = false
  private styleCarousel = {
    transform: ""
  }
  private startX!: number
  private transformVal : number = 0 
  protected aciveCount : number = 1
  protected scrollToElement : number = 2 

  constructor(private renderer: Renderer2) { }
  ngAfterViewInit(): void {
    this.setActiveSlide()
  }
  ngOnInit(): void {
  }
  touchStart(event: TouchEvent):void{
    this.addTransition = false
    this.startX = event.touches[0].clientX
  }
  touchMove(event: TouchEvent): void{
    this.transformVal = event.touches[0].clientX - this.startX
    let move = this.carouselTransformX + this.transformVal
    this.startX = event.touches[0].clientX
    this.setTouchMove(move)
  }
  touchEnd():void{
    if(this.aciveCount - (Math.abs(this.carouselTransformX / this.carouselElement.nativeElement.offsetWidth)) > 0.3){
      this.aciveCount--
    }else if(this.aciveCount - (Math.abs(this.carouselTransformX / this.carouselElement.nativeElement.offsetWidth)) < -0.3){
      this.aciveCount++
    }
    this.addTransition = true
    this.setActiveSlide()
  }
  private setTouchMove(cord:number):void{
    this.styleCarousel.transform = `translateX(${cord}px)`
  }
  private setActiveSlide():void{
    this.styleCarousel.transform = `translateX(${-(100 * this.aciveCount)}%)`
    if(this.aciveCount == 0){ 
      this.aciveCount = this.images.length
    }else if(this.aciveCount >= this.images.length+1){ 
      this.aciveCount = 1}
  }
  get carouselTransformX():number{
    let matrix = new WebKitCSSMatrix(getComputedStyle(this.carouselContainer.nativeElement).transform)
    return matrix.m41
  }
  goToSlide(num:number):void{
    this.addTransition = true
    this.aciveCount = num
    this.setActiveSlide()
  }
  checkInfinity(){
    this.addTransition = false
    this.styleCarousel.transform = `translateX(${-(100 * this.aciveCount)}%)`
  }
  get style(){
    return this.styleCarousel
  }
  @HostListener("window:resize", [])
  onResize():void{
    this.smallScreen = this.chechResponsive()
  }
  private chechResponsive(): boolean{
    if(window.innerWidth >= 768){ 
      return false
    }
    return true
  }
  scrollTo(element: Element){
    element.scrollIntoView(true)
  }
  slideToEl(i:number):void{
    let item = this.scrollableItems.find(val=>val.index == i)
    item?.scroll()
  }
}
