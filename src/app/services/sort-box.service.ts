import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SortBoxService {

  private sortOptions = [
    {value: 1, label: "price (low to high)"},
    {value: 2, label: "price (high to low)"},
    {value: 3, label: "rating (low to high)"},
    {value: 4, label: "rating (high to low)"},
    {value: 5, label: "name (A to Z)"},
    {value: 6, label: "name (Z to A)"}
  ]

  private activeOption: any = this.sortOptions[0]

  constructor() { }

  get options(){
    return this.sortOptions
  }
  get currentOption(){
    return this.activeOption
  }
  set currentOption(val){
    this.sortOptions.map(option=>console.log(option.value, val))
    this.activeOption = this.sortOptions.find(option=>option.value == Number(val))
  }
}
