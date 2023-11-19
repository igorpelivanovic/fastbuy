import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductPageRoutingModule } from './product-page-routing.module';
import { RatingModule } from '../rating/rating.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DirectivesModule } from '../directives/directives.module';
import { PipesModule } from '../pipes/pipes.module';
import { ReactiveFormsModule } from '@angular/forms';
import { LoaderModule } from '../loader/loader.module';

import { ProductPageComponent } from './product-page.component';
import { ProductCarouselComponent } from './product-carousel/product-carousel.component';
import { NotFoundModule } from '../not-found/not-found.module';


@NgModule({
  declarations: [
    ProductPageComponent,
    ProductCarouselComponent,
  ],
  imports: [
    CommonModule,
    ProductPageRoutingModule,
    FontAwesomeModule,
    RatingModule,
    DirectivesModule,
    PipesModule,
    ReactiveFormsModule,
    LoaderModule,
    NotFoundModule
  ]
})
export class ProductPageModule { }
