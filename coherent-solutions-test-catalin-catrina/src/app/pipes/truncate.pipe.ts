import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate',
})
export class TruncatePipe implements PipeTransform {
  transform(
    value: string | null | undefined,
    limit: number = 100,
    ellipsis: string = '…'
  ): string {
    if (!value) {
      return '';
    }
    const str = value.trim();
    if (str.length <= limit) {
      return str;
    }
    return str.slice(0, limit) + ellipsis;
  }
}
