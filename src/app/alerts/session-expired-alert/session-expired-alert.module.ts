import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { SessionExpiredAlertComponent } from './session-expired-alert.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LoaderModule } from 'src/app/loader/loader.module';


@NgModule({
  declarations: [SessionExpiredAlertComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    LoaderModule
  ],
  exports: [
    SessionExpiredAlertComponent
  ]
})
export class SessionExpiredAlertModule { }
