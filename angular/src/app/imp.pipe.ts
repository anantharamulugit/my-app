import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imp'
})
export class ImpPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
