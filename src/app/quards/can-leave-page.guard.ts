import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AccountPageComponent } from '../account-page/account-page.component';
import { UnsavedChangeAlertService } from '../services/unsaved-change-alert.service';

@Injectable({
  providedIn: 'root'
})
export class CanLeavePageGuard implements CanDeactivate<unknown> {
  constructor(private unsavedChangeAlertService: UnsavedChangeAlertService){}
  canDeactivate(
    component: AccountPageComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return component.dirtyData && !component.requestError ? this.unsavedChangeAlertService.canLeavePage() : true
  }
  
}
