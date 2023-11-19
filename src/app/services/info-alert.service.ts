import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { InfoAlert, NewInfoAlertContent } from '../interfaces/alerts';

@Injectable({
  providedIn: 'root'
})
export class InfoAlertService {

  private alert : Subject<InfoAlert> = new Subject()

  constructor() { }

  ngOnInit(): void {
  }

  set infoAlert(newAlert: NewInfoAlertContent){
    this.alert.next(Object.assign(newAlert, { id: new Date().getTime()}))
  }

  getInfoAlert():Observable<InfoAlert>{
    return this.alert.asObservable()
  }
}
