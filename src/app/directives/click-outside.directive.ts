import { Directive, ElementRef, EventEmitter, Host, HostListener, Input, OnInit, Output, Renderer2 } from '@angular/core';
import { NgControl } from '@angular/forms';
import { FilterBoxService } from '../services/filter-box.service';

@Directive({
  selector: '[clickOutside]'
})
export class ClickOutsideDirective {

  @Output() public clickedOutside = new EventEmitter()

  constructor(private el: ElementRef) { 
  }

  @HostListener('document:click', ['$event.target'])
  public onclick(target:any){
    !this.el.nativeElement.contains(target) ? this.clickedOutside.emit(false) : null
  }

}

@Directive({
  selector: '[checkRangeMinVal]'
})
export class checkRangeValMinDirective implements OnInit {

  @Input("range") range: any
  @Input("valueMax") valueMax: any
  @Input("filterSerivece") filterSerivece: any


  constructor(private el: ElementRef, private render: Renderer2, private control: NgControl) { 
  }
  ngOnInit(): void {
      this.render.setAttribute(this.el.nativeElement, "min", this.range.min)
      this.render.setAttribute(this.el.nativeElement, "max", this.range.max)
  }


  @HostListener("input") onChange(){
    if(this.el.nativeElement.value > this.valueMax){
      this.control.control?.setValue(this.valueMax)
    }
  }

}
@Directive({
  selector: '[checkRangeMaxVal]'
})
export class checkRangeValMaxDirective implements OnInit {

  @Input("range") range: any
  @Input("valueMin") valueMin: any
  @Input("filterSerivece") filterSerivece!: FilterBoxService


  constructor(private el: ElementRef, private render: Renderer2, private control : NgControl) { 
  }
  ngOnInit(): void {
      this.render.setAttribute(this.el.nativeElement, "min", this.range.min)
      this.render.setAttribute(this.el.nativeElement, "max", this.range.max)
  }

  @HostListener("input") onChange(){
    if(this.el.nativeElement.value < this.valueMin){
      this.control.control?.setValue(this.valueMin)
    }
  }

}



