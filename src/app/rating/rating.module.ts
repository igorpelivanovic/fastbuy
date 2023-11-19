import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RatingComponent } from './rating/rating.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [ RatingComponent],
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  exports: [
    RatingComponent
  ]
})
export class RatingModule { }
