import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'salesTax'
})
export class SalesTaxPipe implements PipeTransform {

  transform(subTotal: number): number {
    return subTotal / 100 * 20;
  }

}
