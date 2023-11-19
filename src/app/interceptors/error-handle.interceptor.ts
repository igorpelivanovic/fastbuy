import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { SessionExpiredAlertService } from '../services/session-expired-alert.service';
import { AuthService } from '../services/auth.service';

@Injectable()
export class ErrorHandleInterceptor implements HttpInterceptor {

  constructor(private router: Router,private sessionExpiredAlertService: SessionExpiredAlertService, private authService: AuthService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError((error)=>{
        if(error instanceof HttpErrorResponse){
          if(error.error instanceof ErrorEvent){
          }else{
            switch(error.status){
              case 401: 
                this.handleTokenExpired()
              break;
              case 404:
              break; 
              default: 
                this.router.navigate(['/error'])
            }
          }
        }
        return throwError(error)
      })
    );
  }

  handleTokenExpired(): void{
    this.sessionExpiredAlertService.render = true
    this.authService.removeUser()
  }
}
