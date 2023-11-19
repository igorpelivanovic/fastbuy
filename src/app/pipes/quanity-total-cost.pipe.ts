import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'quanityTotalCost'
})
export class QuanityTotalCostPipe implements PipeTransform {

  transform(price: number, quanity: number): number {
    return quanity * price;
  }

}
