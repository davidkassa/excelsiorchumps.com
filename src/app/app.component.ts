// import 'rxjs/add/observable/merge';
// import 'rxjs/add/observable/concat';

import { AuthService } from './providers/auth.service';
import { Component, ViewContainerRef } from '@angular/core';
import { Observable } from 'rxjs';
import { ChumpService } from './chump/chump.service';
import { ChumpDayService } from './chump-day.service';
import { ChumpType } from './chump-type.enum';
import { ChumpDay } from './chump-day';
import { IChump, Chump } from './chump/chump';
import * as moment from 'moment';
import { MatDialog, MatDialogRef, MatDialogConfig } from '@angular/material';
import { PasswordDialogComponent } from './password-dialog/password-dialog.component';

@Component({
  selector: 'ec-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  chumps: Observable<IChump[]>;
  chumpsTodayCount: Observable<number>;
  // chumpsOn18Count: Observable<number>;
  // chumpsOn28Count: Observable<number>;
  //thisWeeksChumps: Observable<number>[] = [];
  thisWeeksChumps: ChumpDay[] = [];
  dialogRef: MatDialogRef<PasswordDialogComponent>;

  //TODO use a chump component?
  constructor(private chumpService: ChumpService, private chumpDayService: ChumpDayService, private _auth: AuthService, public dialog: MatDialog, public viewContainerRef: ViewContainerRef) {
    this.chumps = chumpService.chumps;
    this.chumpsTodayCount = chumpService.chumpsTodayCount;
    // this.chumpsOn18Count =  chumpService.getChumpCountByDay("12/18/2016"); 
    // this.chumpsOn28Count =  chumpService.getChumpCountByDay("12/28/2016");
    for(var i = -6; i <= 0; i++) {
      //this.thisWeeksChumps.push(chumpService.getChumpCountByDay(moment().day(i)));
      this.thisWeeksChumps.push(this.chumpDayService.getChumpDay(moment().add(i,'days')));
    }
    //this.thisWeeksChumps.push(this.chumpsOn18Count, this.chumpsOn28Count);
    
  }

  addAlmostChump(): void {
    this.authenticatedAction( () => this.chumpService.createChump(ChumpType.AlmostChump, null) );
  }

  addChump(): void {
    this.authenticatedAction( () => this.chumpService.createChump(ChumpType.Chump, null) );
  }
  addSuperChump(): void {
    this.authenticatedAction( () => this.chumpService.createChump(ChumpType.SuperChump, null) );
  }
  
  authenticatedAction(callback: Function): void {
    if(!this._auth.authenticated) {
      let config = new MatDialogConfig();
      config.viewContainerRef = this.viewContainerRef;
  
      this.dialogRef = this.dialog.open(PasswordDialogComponent, config);
      this.dialogRef.afterClosed().subscribe(result => {
        if(this._auth.authenticated) {
          callback();
        }
        this.dialogRef = null;
      });
    }
    else {
      callback();
    }
  }
  
}