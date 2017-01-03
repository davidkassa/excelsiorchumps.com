import * as moment from 'moment';
import { Observable } from 'rxjs/Observable';

import { ChumpCount } from './chump-count';
import { ChumpType } from './chump-type.enum';


export class ChumpDay {
  date: moment.Moment;

  constructor(date: moment.MomentInput, public chumpCounts: ChumpCount[], public total: Observable<number>) { 
    this.date = moment(date);
   }
}
