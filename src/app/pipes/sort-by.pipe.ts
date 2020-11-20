import { Pipe, PipeTransform } from '@angular/core';

import { ICrib } from '../models/crib.model';
import { InnerSubscriber } from 'rxjs/internal/InnerSubscriber';

@Pipe({
  name: 'sortBy'
})
export class SortByPipe implements PipeTransform {

  transform(array: ICrib[], args: any): ICrib[] {
    if (array) {
      const sortField = args[0];
      const sortDirection = args[1];
      let modifier = 1;

      if (sortDirection === 'desc') {
        modifier = -1;
      }

      array.sort((a: ICrib, b: ICrib) => {
        if (a[sortField] < b[sortField]) return -1 * modifier;
        else if (b[sortField] < a[sortField]) return modifier;
        else return 0;
      })

      return array;
    }
  }
}
