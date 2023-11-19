import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cartCount'
})
export class CartCountPipe implements PipeTransform {

  transform(value: number): string {
    return value > 99 ? `99+`: `${value}`
  }

}
