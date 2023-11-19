import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SessionExpiredAlertService {

  private _renderAlert : BehaviorSubject<boolean> = new BehaviorSubject(false)

  constructor() { }

  get renderAlert(): Observable<boolean>{
    return this._renderAlert.asObservable()
  }

  set render(val: boolean){
    this._renderAlert.next(val)
  }


}
