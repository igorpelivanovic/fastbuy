import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchPageRoutingModule } from './search-page-routing.module';
import { GridSystemModule } from '../grid-system/grid-system.module';
import { SearchPageComponent } from './search-page.component';
import { NotFoundModule } from '../not-found/not-found.module';


@NgModule({
  declarations: [
    SearchPageComponent,
  ],
  imports: [
    CommonModule,
    SearchPageRoutingModule,
    GridSystemModule,
    NotFoundModule
  ]
})
export class SearchPageModule { }
