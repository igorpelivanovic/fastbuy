import { Injectable } from '@angular/core';
import { cartListElement } from '../interfaces/cart';
import { ComplitedAlertService } from './complited-alert.service';
import { InfoAlertService } from './info-alert.service';
import { InfoAlertType } from '../interfaces/alerts';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private datas : cartListElement[] = this.getData()

  constructor(private infoAlertService: InfoAlertService, private complitedAlertService: ComplitedAlertService) { }

  private getData(): cartListElement[]{
    let data = localStorage.getItem('cartListItems')
    if(data == null) return []
    return JSON.parse(data)
  }
  private saveData(): void{
    localStorage.setItem('cartListItems', JSON.stringify(this.datas))
  }

  get data(): cartListElement[]{
    return this.datas
  }

  get countData(): number{
    return this.datas.reduce((prev, current)=>prev+=current.quanity,0)
  }

  getDataFormId(id: number): cartListElement | null{
    return this.datas.find(item=>item.id == id) || null
  }

  addData(item: cartListElement): void{
    if(this.hasData(item.id)){
      this.updateValue(item.id, item.quanity)
      return
    }
    this.datas.push(item)
    this.infoAlertService.infoAlert = {message: `item ${item.title} is added to cart`, type: InfoAlertType.Cart, time: 2000}
    this.saveData()
  }

  private hasData(id: number){
    return this.datas.some(item=>item.id == id)
  }

  addManyData(items: cartListElement[]): void{
    items.forEach(item=>this.addData(item))
  }

  updateValue(id: number, quanity: number): void{
    this.datas.map(item=>{
      if(item.id == id){
        item.quanity = quanity
      }
      return item
    })
    this.saveData()
  }

  removeData(id: number): void{
    let item = this.getDataFormId(id)
    this.datas = this.datas.filter(itemList=> itemList != item)
    this.infoAlertService.infoAlert = {message: `item ${item?.title} remove from cart`, type: InfoAlertType.Cart, time: 1500}
    this.saveData()
  }
  removeAll(): void{
    this.datas = []
  }
  sendOrder(): void{
    this.removeAll()
    this.complitedAlertService.complitedAlert = {message: `Order is complited`, time: 3000}
  }

}
