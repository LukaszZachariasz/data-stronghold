import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'strNotNullObjProps'
})
export class StrNotNullObjPropsPipe implements PipeTransform {
  transform(canNullPropsObj: any): string {
    if (canNullPropsObj == null) {
      return '';
    }
    const objToStr = Object.keys(canNullPropsObj)
      .reduce((filteredNotNullPropsObj: any, key: string) => {
        const value = canNullPropsObj[key];
        if (value !== null && value.toString().length > 0) {
          filteredNotNullPropsObj[key] = value;
        }
        return filteredNotNullPropsObj;
      }, {});

    return JSON.stringify(objToStr);
  }
}
