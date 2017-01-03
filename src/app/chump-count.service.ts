import { Injectable } from '@angular/core';
import * as moment from 'moment';

import { ChumpService } from './chump/chump.service';

import { ChumpType } from './chump-type.enum';
import { ChumpCount } from './chump-count';

@Injectable()
export class ChumpCountService {

  constructor(private chumpService: ChumpService) { }

  getChumpCount(type: ChumpType, date: moment.MomentInput) : ChumpCount {
    return new ChumpCount(type,date,this.chumpService.getChumpCountByTypeAndDay(type, date));
  }

}
