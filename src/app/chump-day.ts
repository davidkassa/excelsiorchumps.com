import * as moment from 'moment';
import { Observable } from 'rxjs/Observable';

import { ChumpCount } from './chump-count';
import { ChumpType } from './chump-type.enum';


export class ChumpDay {

  constructor(public date: moment.Moment, public chumpCounts: ChumpCount[], public total: Observable<number>) {  }
}
