import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopupsComponent } from './popups/popups.component';
import { InfoAlertModule } from './info-alert/info-alert.module';

@NgModule({
  declarations: [
    PopupsComponent,
  ],
  imports: [
    CommonModule,
    InfoAlertModule
  ],
  exports: [
    PopupsComponent
  ]
})
export class PopupsModule { }
