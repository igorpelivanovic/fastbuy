import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertsHeaderContainerComponent } from './alerts-header-container/alerts-header-container.component';
import { AlertsMainContainerComponent } from './alerts-main-container/alerts-main-container.component';
import { InfoMainAlertModule } from './info-main-alert/info-main-alert.module';
import { UnsavedChangeAlertModule } from './unsaved-change-alert/unsaved-change-alert.module';
import { InfoSideAlertsModule } from './info-side-alerts/info-side-alerts.module';
import { SessionExpiredAlertModule } from './session-expired-alert/session-expired-alert.module';


@NgModule({
  declarations: [
    AlertsHeaderContainerComponent,
    AlertsMainContainerComponent
  ],
  imports: [
    CommonModule,
    InfoMainAlertModule,
    UnsavedChangeAlertModule,
    InfoSideAlertsModule,
    SessionExpiredAlertModule
  ],
  exports: [
    AlertsHeaderContainerComponent,
    AlertsMainContainerComponent
  ]
})
export class AlertsModule { }
