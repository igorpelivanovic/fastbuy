import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './loader.component';
import { FullScreenLoaderComponent } from './full-screen-loader/full-screen-loader.component';


@NgModule({
  declarations: [LoaderComponent, FullScreenLoaderComponent],
  imports: [
    CommonModule
  ],
  exports: [
    LoaderComponent, FullScreenLoaderComponent
  ]
})
export class LoaderModule { }
