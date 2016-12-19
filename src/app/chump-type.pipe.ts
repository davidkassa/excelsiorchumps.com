import { Pipe, PipeTransform } from '@angular/core';

import { ChumpType } from './chump-type.enum';

@Pipe({
  name: 'chumpType'
})
export class ChumpTypePipe implements PipeTransform {

  transform(value: ChumpType, args?: any): string {
    var out: string;
    switch(value) {
      case ChumpType.AlmostChump:
        out = "Almost Chump";
        break;
      case ChumpType.Chump:
        out = "Chump";
        break;
      case ChumpType.SuperChump:
        out = "Super Chump";
        break;
      default:
        out = "";
    }
    return out;
  }

}
