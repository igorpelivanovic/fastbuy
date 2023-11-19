import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SomtingWronPageRoutingModule } from './somting-wron-page-routing.module';
import { SomtingWronPageComponent } from './somting-wron-page.component';


@NgModule({
  declarations: [
    SomtingWronPageComponent
  ],
  imports: [
    CommonModule,
    SomtingWronPageRoutingModule
  ]
})
export class SomtingWronPageModule { }
