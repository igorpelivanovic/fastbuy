import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatString'
})
export class FormatStringPipe implements PipeTransform {

  transform(value: string, string: string): string {
    return `${value} ${string}`
  }

}
