import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page.component';
import { ItemPreviewModule } from '../item-preview/item-preview.module';
import { LoaderModule } from '../loader/loader.module';

@NgModule({
  declarations: [HomePageComponent],
  imports: [
    CommonModule,
    ItemPreviewModule,
    LoaderModule
  ]
})
export class HomePageModule { }
