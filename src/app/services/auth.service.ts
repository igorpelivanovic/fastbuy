import { Injectable } from '@angular/core';
import { userLogged } from '../interfaces/account';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  setUser(user: userLogged): void{
    sessionStorage.setItem("id_token", user.token)
    sessionStorage.setItem("user_data", JSON.stringify(user))
  }

  hasUser(): boolean{
    if(sessionStorage.getItem("id_token") && sessionStorage.getItem("user_data")) return true
    return false
  }

  removeUser(): void{
    sessionStorage.removeItem("id_token"),
    sessionStorage.removeItem("user_data")
  }

  get userId(): number | null{
    let data = sessionStorage.getItem('user_data')
    if(data){
      return JSON.parse(data).id
    }
    return null
  }
  get token(): string | null{
    return sessionStorage.getItem('id_token')
  }




}
