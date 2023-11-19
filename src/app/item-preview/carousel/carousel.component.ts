import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  @Input("images") imagesUrl !: String[]

  protected index: number = 0
  private activeAutoSlide: boolean = true
  private interval!: NodeJS.Timeout
  constructor() { }

  ngOnInit(): void {
  }
  setAutoInterval(){
    this.activeAutoSlide = true
    this.autoSlide()
  }
  private autoSlide():void{
    if(this.activeAutoSlide){
      this.imagesUrl.length-1 <= this.index ? this.index = 0 : this.index++
      this.interval = setTimeout(()=>this.autoSlide(), 2000)
    }
  }
  clearAutoSlide():void{
    this.activeAutoSlide = false
    this.index = 0
    clearInterval(this.interval)
  }

}
