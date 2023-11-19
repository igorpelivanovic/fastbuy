import { Component, OnDestroy, OnInit } from '@angular/core';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { Subscription } from 'rxjs';
import { slideInFromTop } from 'src/app/animations/slideInFromTop';
import { ComplitedAlert } from 'src/app/interfaces/alerts';
import { ComplitedAlertService } from 'src/app/services/complited-alert.service';

@Component({
  selector: 'app-info-main-alert',
  templateUrl: './info-main-alert.component.html',
  styleUrls: ['./info-main-alert.component.scss'],
  animations: [slideInFromTop]
})
export class InfoMainAlertComponent implements OnInit, OnDestroy {

  private complitedAlert : ComplitedAlert | null = null

  private complitedAlertSubscription !: Subscription

  private icons = {
    faCheck: faCheck
  }

  constructor(private complitedAlertService: ComplitedAlertService) { }

  ngOnInit(): void {
    this.complitedAlertSubscription = this.complitedAlertService.getComplitedAlert().subscribe({
      next: (data)=>{
        this.complitedAlert = data
        setTimeout(()=>this.removeAlert(data), data.time)
      }
    })
  }

  ngOnDestroy(): void {
    this.complitedAlertSubscription.unsubscribe()
  }

  private removeAlert(alert: ComplitedAlert): void{
    if(this.complitedAlert != alert) return
    this.complitedAlert = null
  }

  get icon(){
    return this.icons
  }

  get alert(): ComplitedAlert | null{
    return this.complitedAlert
  }
}
