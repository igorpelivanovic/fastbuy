import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClickOutsideDirective } from '../directives/click-outside.directive';
import { CarouselStandardElementDirective } from './carousel-standard-element.directive';
import { ImageDirective } from './image.directive';
import { AddAnimationFullWidthDirective } from './add-animation-full-width.directive';



@NgModule({
  declarations: [ClickOutsideDirective, CarouselStandardElementDirective, ImageDirective, AddAnimationFullWidthDirective],
  imports: [
    CommonModule
  ],
  exports: [ClickOutsideDirective, CarouselStandardElementDirective, ImageDirective, AddAnimationFullWidthDirective]
})
export class DirectivesModule { }
