import { Component, OnDestroy, OnInit } from '@angular/core';
import { slideInFromRight } from 'src/app/animations/slideInFromRight';
import { InfoAlertService } from 'src/app/services/info-alert.service';
import { faCartShopping, faHeart, faClock } from '@fortawesome/free-solid-svg-icons';
import { InfoAlert, InfoAlertType } from 'src/app/interfaces/alerts';
import { Subject, Subscription } from 'rxjs';

@Component({
  selector: 'app-info-side-alerts',
  templateUrl: './info-side-alerts.component.html',
  styleUrls: ['./info-side-alerts.component.scss'],
  animations: [slideInFromRight]
})
export class InfoSideAlertsComponent implements OnInit, OnDestroy {

  private icons = {
    faCartShopping: faCartShopping,
    faHeart: faHeart,
    faClock: faClock
  }

  private infoAlerts : InfoAlert[] = []

  private infoAlertsSubject !: Subscription

  constructor(private infoAlertService: InfoAlertService) { }

  ngOnInit(): void {
    this.handleAlerts()
  }

  ngOnDestroy(): void {
    this.infoAlertsSubject.unsubscribe()
  }

  private handleAlerts(): void{
    this.infoAlertsSubject = this.infoAlertService.getInfoAlert().subscribe({
      next: (alert)=>{
        this.addAlert(alert)
        setTimeout(()=>this.removeAlert(alert), alert.time)
      }
    })
  }

  private addAlert(alert: InfoAlert): void{
    this.infoAlerts.push(alert)
    
  }

  private removeAlert(alert: InfoAlert): void{
    this.infoAlerts = this.infoAlerts.filter(infoAlert=>infoAlert != alert)
  }

  get alerts(): InfoAlert[]{
    return this.infoAlerts
  }

  icon(typeAlert: InfoAlertType):any{
    switch(typeAlert){
      case "cart":
        return this.icons.faCartShopping
      break;
      case "whish":
        return this.icons.faHeart
      break;
      case "expired":
        return this.icons.faClock
      break;
    }
  }

}
