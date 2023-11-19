import { Inject, Injectable } from '@angular/core';
import { Product } from '../interfaces/datas';
import { FiltersOptions, FiltersValues } from '../interfaces/filters';
import { Subject } from 'rxjs';
import { DiscountPercentagePipe } from '../pipes/discount-percentage.pipe';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class FilterBoxService {
  private filtersDefaultValue = {
    brands: [],
    price: {min: 0, max: 0},
    rating: {min: 1, max: 5},
  } as FiltersValues
  filtersOptions = {
    brands: [],
    price: this.filtersDefaultValue.price,
    rating: this.filtersDefaultValue.rating,
  } as FiltersOptions
  private filtersCurrentValue = {
    brands: [],
    price: {},
    rating: {},
  } as unknown as FiltersValues

  
  showFilterBox: boolean = false
  subjectBrands = new Subject<void>()
  subjectPrice = new Subject<void>()
  subjectRating = new Subject<void>()
  subjectUpdateValue = new Subject<void>()

  constructor(@Inject(DOCUMENT) private document: Document) { }

  updateOptions(products: Product[]){
    this.filtersCurrentValue.price.min = this.filtersDefaultValue.price.min = this.filtersOptions.price.min = Math.min(...products.map(item => Math.floor(new DiscountPercentagePipe().transform(item.price, item.discountPercentage))))
    this.filtersCurrentValue.price.max = this.filtersDefaultValue.price.max = this.filtersOptions.price.max = Math.max(...products.map(item => item.price))
    this.filtersCurrentValue.rating.min = this.filtersDefaultValue.rating.min = this.filtersOptions.rating.min = 1
    this.filtersCurrentValue.rating.max = this.filtersDefaultValue.rating.max = this.filtersOptions.rating.max = 5
    let val = [...new Set( products.map(obj => obj.brand)) ].sort().map((el)=>{
      this.filtersDefaultValue.brands.push(false)
      this.filtersOptions.brands.push(el)
      this.filtersCurrentValue.brands = this.filtersDefaultValue.brands
    })
    this.subjectUpdateValue.next()
  }
  addValues(data:any){
    this.filtersCurrentValue.price.min = data.minPrice
    this.filtersCurrentValue.price.max = data.maxPrice
    this.filtersCurrentValue.rating.min = data.minRating
    this.filtersCurrentValue.rating.max = data.maxRating
    this.filtersCurrentValue.brands = data.brands
  }
  get default(){
    return this.filtersDefaultValue
  }
  get current(){
    return this.filtersCurrentValue
  }
  get options(){
    return this.filtersOptions
  }
  get updateVal(){
    return this.subjectUpdateValue
  }
  get currentBrands(): string[]{
    let array = [] as string[]
    this.filtersCurrentValue.brands.forEach((element, index)=>{
      if(element) array.push(this.filtersOptions.brands[index])
    })
    return array
  }
  get currentPrice():boolean{
    return Object.entries(this.current.price).toString() != Object.entries(this.default.price).toString();
  }
  get currentRating():boolean{
    return Object.entries(this.current.rating).toString() != Object.entries(this.default.rating).toString();
  }
  removeBrands(){
    this.subjectBrands.next()
  }
  removePrice(){
    this.subjectPrice.next()
  }
  removeRating(){
    this.subjectRating.next()
  }
  get subjBrand(){
    return this.subjectBrands
  }
  get subjPrice(){
    return this.subjectPrice
  }
  get subjRating(){
    return this.subjectRating
  }
  toggleShowFilter():void{
    this.showFilterBox = !this.showFilterBox
    if(this.showFilterBox){
      this.document.body.style.overflow = "hidden"
      return
    }
    this.document.body.style.overflow = "visible"
  }
}
