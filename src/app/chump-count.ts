import * as moment from 'moment';
import { Observable } from 'rxjs/Observable';

import { ChumpType } from './chump-type.enum';
import { ChumpService } from './chump/chump.service';

export class ChumpCount {

  constructor(public type: ChumpType, public date: moment.MomentInput, public count: Observable<number>) {  }
}
