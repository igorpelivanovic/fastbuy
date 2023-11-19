import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemPreviewComponent } from './item-preview.component';
import { CarouselComponent } from './carousel/carousel.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RatingModule } from '../rating/rating.module';
import { PipesModule } from '../pipes/pipes.module';
import { DirectivesModule } from '../directives/directives.module';

@NgModule({
  declarations: [
    ItemPreviewComponent,
    CarouselComponent,
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    RatingModule,
    PipesModule,
    DirectivesModule
  ],
  exports: [
    ItemPreviewComponent
  ]
})
export class ItemPreviewModule { }
