import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirectivesModule } from 'src/app/directives/directives.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { InfoSideAlertsComponent } from './info-side-alerts.component';

@NgModule({
  declarations: [InfoSideAlertsComponent],
  imports: [
    CommonModule,
    DirectivesModule  ,
    FontAwesomeModule
  ],
  exports: [InfoSideAlertsComponent]
})
export class InfoSideAlertsModule { }
