import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UnsavedChangeAlertService {

  private _renderAlert : boolean = false

  private _canLeave : Subject<boolean> = new Subject()

  constructor() { }

  get renderAlert(): boolean{
    return this._renderAlert
  }

  canLeavePage(): Observable<boolean>{
    this._renderAlert = true
    return this._canLeave.asObservable()
  }

  set canLeave(val: boolean){
    this._renderAlert = false
    this._canLeave.next(val)
  }

}
