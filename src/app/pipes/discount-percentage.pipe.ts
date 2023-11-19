import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'discountPercentage'
})
export class DiscountPercentagePipe implements PipeTransform {

  transform(value: number, procent: number): number {
    let newPrice = value - ((value / 100) * procent)
    return newPrice;
  }

}
