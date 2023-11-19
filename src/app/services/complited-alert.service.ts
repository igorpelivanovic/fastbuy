import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { ComplitedAlert, NewComplitedAlertContent } from '../interfaces/alerts';

@Injectable({
  providedIn: 'root'
})
export class ComplitedAlertService {

  private alert : Subject<ComplitedAlert> = new Subject()

  constructor() { }

  set complitedAlert(newAlert: NewComplitedAlertContent){
    this.alert.next(Object.assign(newAlert, { id: new Date().getTime()}))
  }

  getComplitedAlert():Observable<ComplitedAlert>{
    return this.alert.asObservable()
  }

}
