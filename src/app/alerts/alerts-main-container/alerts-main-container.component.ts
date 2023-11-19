import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { opacityFadeInOut } from 'src/app/animations/opacityFadeInOut';
import { transformYInOut } from 'src/app/animations/transformYInOut';
import { InfoAlertService } from 'src/app/services/info-alert.service';
import { SessionExpiredAlertService } from 'src/app/services/session-expired-alert.service';
import { UnsavedChangeAlertService } from 'src/app/services/unsaved-change-alert.service';

@Component({
  selector: 'app-alerts-main-container',
  templateUrl: './alerts-main-container.component.html',
  styleUrls: ['./alerts-main-container.component.scss'],
  animations: [
    opacityFadeInOut,
    transformYInOut
  ]
})
export class AlertsMainContainerComponent implements OnInit, OnDestroy {

  private _renderSessionExpiredAlert : boolean = false

  private subscriptions : Subscription = new Subscription()

  constructor(private unsavedChangeAlertService: UnsavedChangeAlertService, private sessionExpiredAlertService: SessionExpiredAlertService) { }

  ngOnInit(): void {
    this.showSessionExpiredAlert()
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe()
  }

  private showSessionExpiredAlert(): void{
    this.subscriptions.add(this.sessionExpiredAlertService.renderAlert.subscribe({
      next: (data)=>{
        this._renderSessionExpiredAlert = data
      }
    }))
  }

  get renderUnsavedChangeAlertService():boolean{
    return this.unsavedChangeAlertService.renderAlert
  }

  get renderSessionExpiredAlertService():boolean{
    return this._renderSessionExpiredAlert
  }

}
