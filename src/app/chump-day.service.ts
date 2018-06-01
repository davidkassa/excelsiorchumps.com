import 'rxjs/add/observable/of';
// import 'rxjs/add/operator/merge';

// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/count';
// import 'rxjs/add/operator/scan';
// import 'rxjs/add/operator/reduce';
// import 'rxjs/add/operator/switch';
// import 'rxjs/add/operator/switchMap';


import { Injectable } from '@angular/core';
import { Observable, Operator } from 'rxjs';
import * as moment from 'moment';
import { EnumValues } from 'enum-values';

import { ChumpCountService } from './chump-count.service';

import { ChumpType } from './chump-type.enum';
import { ChumpCount } from './chump-count';
import { ChumpDay } from './chump-day';

@Injectable()
export class ChumpDayService {

  constructor(private chumpCountService: ChumpCountService) { }

  getChumpDay(date: moment.MomentInput) : ChumpDay {
    var cd = new ChumpDay(date, new Array<ChumpCount>(), Observable.of(0) );
    for(var type in EnumValues.getNames(ChumpType)) {
      var chumpCount = this.chumpCountService.getChumpCount(ChumpType[ChumpType[type]],date);
      cd.chumpCounts.push( chumpCount);
      // https://github.com/ReactiveX/rxjs/blob/master/MIGRATION.md
      // cd.total = cd.total.merge(chumpCount.count).scan((s, v) => s + v, 0);//  Rx.Observable.range(1,999).sum()
    }
//    cd.total = cd.total.scan( (acc, val) => acc + val);
    return cd;
  }

}
