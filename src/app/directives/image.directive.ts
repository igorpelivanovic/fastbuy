import { Directive, ElementRef, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[image]'
})
export class ImageDirective{

  private errorCount: number = 0

  constructor(private element: ElementRef<HTMLElement>, private renderer: Renderer2) { }

  @HostListener('error') onError():void{
    if(this.errorCount < 3){
      this.errorCount++
      this.renderer.setAttribute(this.element.nativeElement, 'src', `${this.element.nativeElement.getAttribute('src')}?${new Date()}`)
      return
    }
    this.renderer.setAttribute(this.element.nativeElement, 'src', 'assets/noImg.svg')
  }

}
