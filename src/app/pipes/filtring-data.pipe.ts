import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../interfaces/datas';
import { DiscountPercentagePipe } from './discount-percentage.pipe';

@Pipe({
  name: 'filtringData'
})
export class FiltringDataPipe implements PipeTransform {

  constructor(){}

  transform(products: Product[], filterData: any, sortData: any): Product[] {
    products = products.filter(product=>this.between(new DiscountPercentagePipe().transform(product.price, product.discountPercentage), filterData.price) && this.between(product.rating, filterData.rating) && this.checkBrand(filterData.brands, product.brand)) 
    return this.sort(products, sortData.value);
  }
  between(val:number, range:{min: number, max: number}):boolean{
    return Math.floor(val) >= range.min && Math.floor(val) <= range.max
  }
  checkBrand(brands: String[], val:string):boolean{
    if(brands.length == 0) return true
    return brands.includes(val)
  }
  sort(products: any[], sortVal: number): any{
    if(products.length == 0) return []
    switch(sortVal){
      case 1:
        return products.sort(function(a, b): number{
            let aPrice = new DiscountPercentagePipe().transform(a.price, a.discountPercentage)
            let bPrice = new DiscountPercentagePipe().transform(b.price, b.discountPercentage)
                if(aPrice < bPrice){
                  return -1
                }
                if(aPrice > bPrice){
                  return 1
                }
              return 0
            })
      break;
      case 2:
        return products.sort(function(a, b): number{
          let aPrice = new DiscountPercentagePipe().transform(a.price, a.discountPercentage)
          let bPrice = new DiscountPercentagePipe().transform(b.price, b.discountPercentage)
          if(aPrice < bPrice){
            return 1
          }
          if(aPrice > bPrice){
            return -1
          }
        return 0
      })
      break;
      case 3:
        return products.sort(function(a, b): number{
          if(a.rating < b.rating){
            return 1
          }
          if(a.rating > b.rating){
            return -1
          }
        return 0
      })
      break;
      case 4:
        return products.sort(function(a, b): number{
          if(a.rating < b.rating){
            return 1
          }
          if(a.rating > b.rating){
            return -1
          }
        return 0
      })
      break;
      case 5:
        return products.sort(function(a, b): number{
          if(a.title < b.title){
            return -1
          }
          if(a.price > b.price){
            return 1
          }
        return 0
      })
      break;
      case 6:
        return products.sort(function(a, b): number{
          if(a.title < b.title){
            return 1
          }
          if(a.price > b.price){
            return -1
          }
        return 0
      })
      break;
    }
  }


}
