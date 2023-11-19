import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoAlertComponent } from './info-alert/info-alert.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [
    InfoAlertComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  exports: [
    InfoAlertComponent
  ]
})
export class InfoAlertModule { }
