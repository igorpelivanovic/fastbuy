import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { InfoMainAlertComponent } from './info-main-alert.component';
import { DirectivesModule } from 'src/app/directives/directives.module';

@NgModule({
  declarations: [
    InfoMainAlertComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    DirectivesModule
  ],
  exports: [
    InfoMainAlertComponent
  ]
})
export class InfoMainAlertModule { }
