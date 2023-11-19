import { Directive, ElementRef, Input} from '@angular/core';

@Directive({
  selector: '[carouselStandardElement]'
})
export class CarouselStandardElementDirective {

  @Input("key") index !: number

  constructor(private element: ElementRef<HTMLElement>) { }
  public scroll(){
    this.element.nativeElement.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  }



}
