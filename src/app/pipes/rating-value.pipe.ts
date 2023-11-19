import { CurrencyPipe, DecimalPipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ratingValue'
})
export class RatingValuePipe implements PipeTransform {

  transform(currentR: number, maxR: number): string {
    let current = new DecimalPipe("en-US").transform(currentR, "1.2-2") 
    let max = new DecimalPipe("en-US").transform(maxR, "1.2-2") 
    return `${current} / ${max}`
  }

}
