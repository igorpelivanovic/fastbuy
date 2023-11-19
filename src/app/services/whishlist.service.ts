import { Injectable } from '@angular/core';
import { WhishListElement } from '../interfaces/whishlist';
import { InfoAlertService } from './info-alert.service';
import { InfoAlertType } from '../interfaces/alerts';

@Injectable({
  providedIn: 'root'
})
export class WhishlistService {

  private datas : WhishListElement[] = this.getData()

  constructor(private infoAlertService: InfoAlertService) { }

  private getData(){
    let data = localStorage.getItem('whishlistItems')
    if(data == null) return []
    return JSON.parse(data)
  }
  private saveData(): void{
    localStorage.setItem('whishlistItems', JSON.stringify(this.datas))
  }
  private getItemFromId(id: number): WhishListElement{
    return this.datas.find(item => item.id == id) as WhishListElement
  }
  get data(){
    return this.datas
  }
  hasData(id:number):boolean{
    return this.datas.some(item=> item.id == id)
  }
  toggleData(item: WhishListElement):void{
    if(this.hasData(item.id)){
      this.removeData(item.id)
      return
    }
    this.addData(item)
  }
  addData(item: WhishListElement):void{
    this.datas.push(item)
    this.infoAlertService.infoAlert = {message: `item ${item.title} is added to whishlist`, type: InfoAlertType.WhishList, time: 1500}
    this.saveData()
  }
  removeData(id:number):void{
    let item = this.getItemFromId(id)
    this.datas = this.data.filter(itemList=>itemList != item)
    this.infoAlertService.infoAlert ={message: `item ${item.title} remove from whishlist`, type: InfoAlertType.WhishList, time: 1500}
    this.saveData()
  }
  getQuanityFromId(id: number):number{
    return this.data.find(item=>item.id == id)?.quanity || 1
  }
  updateQuanity(value: number, id:number): void{
    if(this.hasData(id)){
      this.datas = this.data.map(item=>{
        if(item.id == id) item.quanity = value
        return item
      })
    }
    this.saveData()
  }
  removeAllData():void{
    this.datas = []
    this.saveData()
  }
}
