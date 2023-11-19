import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UnsavedChangeAlertComponent } from './unsaved-change-alert.component';



@NgModule({
  declarations: [UnsavedChangeAlertComponent],
  imports: [
    CommonModule
  ],
  exports: [UnsavedChangeAlertComponent]
})
export class UnsavedChangeAlertModule { }
