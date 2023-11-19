import { Component, OnDestroy, OnInit } from '@angular/core';
import { faCartShopping, faHeart, faUser, faClock } from '@fortawesome/free-solid-svg-icons';
import { Subscription } from 'rxjs';
import { slideInFromRight } from 'src/app/animations/slideInFromRight';


@Component({
  selector: 'app-info-alert',
  templateUrl: './info-alert.component.html',
  styleUrls: ['./info-alert.component.scss'],
  animations: [slideInFromRight]
})
export class InfoAlertComponent implements OnInit, OnDestroy {
  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  private icons = {
    faCartShopping: faCartShopping,
    faHeart: faHeart,
    faUser: faUser,
    faClock: faClock
  }

  /*private alertsItems : Alert[] = []

  private alertServiceSubscriber !: Subscription

  constructor(private alertService: AlertService) { }
  ngOnDestroy(): void {
    this.alertServiceSubscriber.unsubscribe()
  }

  ngOnInit(): void {
    this.handleAlerts()
  }

  icon(type: TypeAlert): any{
    switch(type){
      case 'cart':
        return this.icons.faCartShopping
      break;
      case 'whish':
        return this.icons.faHeart
      break;
      case 'user':
        return this.icons.faUser
      break;
      case 'expired':
        return this.icons.faClock
      break;
    }
  }

  get alerts(){
    return this.alertsItems
  }

  private handleAlerts(): void{
    this.alertServiceSubscriber = this.alertService.getAlerts().subscribe({
      next: (data)=>{
        this.alertsItems.push(data)
        setTimeout(()=>this.removeAlert(data.id), data.time)
      }
    })
  }

  private removeAlert(id: number): void{
    this.alertsItems = this.alertsItems.filter(alert=> alert.id != id)
  }*/
}
