import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'keys'
})
export class KeysPipe implements PipeTransform {
  transform(enumValue: any) {
    return Object.keys(enumValue).filter(e => !isNaN(+e)).map(o => ({value: +o, displayName: enumValue[o]}));
  }
}
