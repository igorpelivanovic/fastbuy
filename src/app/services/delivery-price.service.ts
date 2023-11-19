import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DeliveryPriceService {

  private shippingOptions = [
    {id: 1, title: "standard delivery", price: 50},
    {id: 2, title: "premium delivery", price: 100}
  ]

  constructor() { }

  get shippingOpt(){
    return this.shippingOptions
  }
}
