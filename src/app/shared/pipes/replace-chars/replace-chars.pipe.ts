import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'replaceChars'
})
export class ReplaceCharsPipe implements PipeTransform {
  transform(value: string, [replaceFrom, replaceTo]: [string, string]): string {
    return value.split(replaceFrom).join(replaceTo);
  }
}
