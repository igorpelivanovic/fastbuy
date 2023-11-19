import { Injectable } from '@angular/core';
import { loginData, userData, userLogged, userLoginData, usersListResponse } from '../interfaces/account';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { baseUrl } from 'src/environments/environment';
import { Observable, Observer } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private httpService: HttpClient, private authService : AuthService) { }

  register(data: userData): Observable<any>{
    return this.httpService.post(`${baseUrl}/users/add`,  JSON.stringify(data), {
      headers: new HttpHeaders().set('Content-Type', 'application/json')
    })
  }
  login(data: loginData): Observable<userLogged>{
    return this.httpService.post<userLogged>(`${baseUrl}/auth/login`, JSON.stringify(data), {
      headers: new HttpHeaders().set("Content-Type", 'application/json')
    })
  }
  getUserData():Observable<any>{
    let id = this.authService.userId
    return this.httpService.get(`${baseUrl}/auth/users/${id}`, {
      headers: new HttpHeaders().set("Content-Type", 'application/json')
    })
  }
  changeUserData(data: userData): Observable<userData>{
    return this.httpService.put<userData>(`${baseUrl}/auth/users/${data.id}`,  JSON.stringify(data), {
      headers: new HttpHeaders().set('Content-Type', 'application/json')
    })
  }
  logout():void{
    this.authService.removeUser()
  }
  getUsersList(): Observable<usersListResponse>{
    return this.httpService.get<usersListResponse>(`${baseUrl}/users?&select=username,password`, {
      headers: new HttpHeaders().set("Content-Type", 'application/json')
    })
  }
}
