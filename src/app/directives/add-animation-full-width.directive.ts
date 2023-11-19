import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appAddAnimationFullWidth]'
})
export class AddAnimationFullWidthDirective implements OnInit {

  @Input() animationDuration : number = 1500

  constructor(private element: ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void {
    this.renderer.setStyle(this.element.nativeElement, 'animation', `widthZeroToFull linear ${this.animationDuration}ms forwards`)
  }



}
