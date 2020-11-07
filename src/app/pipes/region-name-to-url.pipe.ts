import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'regionNameToUrl'
})
export class RegionNameToUrlPipe implements PipeTransform {

  transform(value: number): string {
    let replaceCharacters = value.toString()
      .toLowerCase()
      .replace(/,/g, "")
      .replace(/\s+/g, '_');
    return replaceCharacters;
  }
}
