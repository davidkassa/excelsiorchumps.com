import * as moment from 'moment';
import { Observable } from 'rxjs';

import { ChumpType } from './chump-type.enum';
import { ChumpService } from './chump/chump.service';

export class ChumpCount {
  date: moment.Moment;

  constructor(public type: ChumpType, date: moment.MomentInput, public count: Observable<number>) {  
    this.date = moment(date);
  }
}
