import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ChumpService } from './chump/chump.service';
import { ChumpType } from './chump-type.enum';
import { IChump, Chump } from './chump/chump';

@Component({
  selector: 'ec-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  chumps: Observable<IChump[]>;
  chumpsToday: Observable<IChump[]>;
  chumpsTodayCount: Observable<number>;

  //TODO use a chump component?
  constructor(private chumpSvc: ChumpService) {
    this.chumps = chumpSvc.chumps;
    this.chumpsToday = chumpSvc.chumpsToday;
    this.chumpsTodayCount = chumpSvc.chumpsTodayCount;
  }

  addAlmostChump(): void {
    this.chumpSvc.createChump(ChumpType.AlmostChump, null);
  }
  addChump(): void {
    this.chumpSvc.createChump(ChumpType.Chump, null);
  }
  addSuperChump(): void {
    this.chumpSvc.createChump(ChumpType.SuperChump, null);
  }
}