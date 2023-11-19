import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'carousel'
})
export class CarouselPipe implements PipeTransform {

  transform(arr: String[]): String[] {
    let newArr = Array.from(arr)
    newArr.unshift(arr[arr.length-1])
    newArr.push(arr[0])
    return newArr
  }

}
