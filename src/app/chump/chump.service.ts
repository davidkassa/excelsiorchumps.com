import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/mergeMap';
// import 'rxjs/add/operator/count';
// import 'rxjs/add/operator/scan';
// import 'rxjs/add/operator/reduce';

import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireAction, DatabaseSnapshot } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { ReplaySubject } from 'rxjs';
import * as moment from 'moment';

import { IChump, Chump } from './chump';
import { ChumpType } from '../chump-type.enum';


//TODO split into Chump, ChumpDay, and ChumpCount Services?
@Injectable()
export class ChumpService {
  // https://github.com/r-park/todo-angular2-firebase/blob/master/src/tasks/services/task-service.ts
  
  //TODO: use rxjs to make the public array an Observable<T> instead of Firebase specific (see above link)
  //private _chumps: Observable<AngularFireAction<DatabaseSnapshot<{}>>[]>;
  //private _chumps: AngularFireList<IChump[]>;
  private _chumpList: AngularFireList<IChump>;
  private _chumps: Observable<IChump[]>;
  chumps: Observable<IChump[]>;
  chumpsToday: Observable<IChump[]>;
  chumpsTodayCount: Observable<number>;

  constructor(db: AngularFireDatabase) {
    const path = '/chumps';

    this._chumpList = db.list(path, ref => ref.orderByChild('createdAt'));
    this._chumps = this._chumpList.snapshotChanges().map(actions => {let c:IChump[]; return c.concat(...actions.map((act) => act.payload.val()))});

    //This might be suspect? Need to better understand this stuff
    this.chumps = this._chumps.map( (arr) => { return arr.reverse(); } );
    this.chumpsToday = this._chumps.map( arr => arr.filter( c => moment().startOf('day').diff(c.createdAt) <= 0));
    this.chumpsTodayCount = this._chumps.map( arr => arr.filter( c => moment().startOf('day').diff(c.createdAt) <= 0).length);
  }

  getChumpCountByTypeAndDay(type: ChumpType, day: moment.MomentInput): Observable<number> {
    return this._chumps.map( arr => arr.filter( c => moment(c.createdAt).isSame(day,'day') && c.type === type ).length);
  }
  getChumpCountByDay(day: moment.MomentInput): Observable<number> {
    return this._chumps.map( arr => arr.filter( c => moment(c.createdAt).isSame(day,'day')).length);
  }

  createChump(type: ChumpType, note: string): PromiseLike<any> {
    return this._chumpList.push(new Chump(type,note));
  }

  removeChump(chump: IChump): Promise<any> {
    return this._chumpList.remove(chump.$key);
  }

  updateChump(chump: IChump, changes: any): Promise<any> {
    return this._chumpList.update(chump.$key, changes);
  }
}
