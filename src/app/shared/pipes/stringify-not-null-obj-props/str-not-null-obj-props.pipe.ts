import { Pipe, PipeTransform } from '@angular/core';
import { ParseUtil } from '../../utils/parse-util';

@Pipe({
  name: 'strNotNullObjProps'
})
export class StrNotNullObjPropsPipe implements PipeTransform {
  transform(obj: any): string {
    return ParseUtil.objectNotNullPropsToString(obj);
  }
}
