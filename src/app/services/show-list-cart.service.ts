import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShowListCartService {

  private showListCart : boolean = true

  constructor() { }

  get showList(): boolean{
    return this.showListCart
  }

  set showList(val: boolean){
    this.showListCart = val
  }
  
  toggle():void{
    this.showListCart = !this.showListCart
  }
}
