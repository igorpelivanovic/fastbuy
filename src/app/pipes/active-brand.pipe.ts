import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'activeBrand'
})
export class ActiveBrandPipe implements PipeTransform {

  transform(value: string[],): string {
    if(value.length == 1) return value.toString()
    return `brands (${value.length})`;
  }

}



