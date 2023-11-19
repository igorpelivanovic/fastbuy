import { Pipe, PipeTransform } from '@angular/core';
import { AddressUser } from '../interfaces/account';

@Pipe({
  name: 'formatAddress'
})
export class FormatAddressPipe implements PipeTransform {

  transform(value: AddressUser): string {
    return `${value.address}, ${value.city} ${value.postalCode}`;
  }

}
