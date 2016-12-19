import 'rxjs/add/operator/map';
import 'rxjs/add/operator/count';
import 'rxjs/add/operator/scan';
import 'rxjs/add/operator/reduce';

import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Observable } from 'rxjs/Observable';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import * as moment from 'moment';

import { IChump, Chump } from './chump';
import { ChumpType } from '../chump-type.enum';

@Injectable()
export class ChumpService {
  // https://github.com/r-park/todo-angular2-firebase/blob/master/src/tasks/services/task-service.ts
  
  //TODO: use rxjs to make the public array an Observable<T> instead of Firebase specific (see above link)
  private _chumps: FirebaseListObservable<IChump[]>;
  chumps: Observable<IChump[]>;
  chumpsToday: Observable<IChump[]>;
  chumpsTodayCount: Observable<number>;

  constructor(af: AngularFire) {
    const path = '/chumps';

    this._chumps = af.database.list(path, {
      query: {
        orderByChild: 'createdAt'
      }
    });
    //This might be suspect? Need to better understand this stuff
    this.chumps = this._chumps.map( (arr) => { return arr.reverse(); } );
    this.chumpsToday = this._chumps.map( arr => arr.filter( c => moment().startOf('day').diff(c.createdAt) <= 0));
    this.chumpsTodayCount = this._chumps.map( arr => arr.filter( c => moment().startOf('day').diff(c.createdAt) <= 0).length);
   }

  createChump(type: ChumpType, note: string): firebase.Promise<any> {
    return this._chumps.push(new Chump(type,note));
  }

  removeChump(chump: IChump): firebase.Promise<any> {
    return this._chumps.remove(chump.$key);
  }

  updateChump(chump: IChump, changes: any): firebase.Promise<any> {
    return this._chumps.update(chump.$key, changes);
  }
}
