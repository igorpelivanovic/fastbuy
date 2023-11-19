import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'whishlistBtn'
})
export class WhishlistBtnPipe implements PipeTransform {

  transform(value: boolean): string {
    return value ? 'remove from whishlist': 'add to whishlist';
  }

}
