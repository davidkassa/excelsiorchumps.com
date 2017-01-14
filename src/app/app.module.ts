import 'hammerjs';
import { MaterialModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { FirebaseModule } from './firebase/firebase.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AuthService } from './providers/auth.service';

import { AppComponent } from './app.component';
import { ChumpService } from './chump/chump.service';
import { ChumpCountService } from './chump-count.service';
import { ChumpDayService } from './chump-day.service';
import { ChumpTypePipe } from './chump-type.pipe';
import { PasswordDialogComponent } from './password-dialog/password-dialog.component';
//import { ChumpComponent } from './chump/chump.component';



@NgModule({
  declarations: [
    AppComponent,
    ChumpTypePipe,
    PasswordDialogComponent
//    ChumpComponent
  ],
  imports: [
    BrowserModule,
    FirebaseModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    FlexLayoutModule.forRoot()
  ],
  providers: [ChumpService, ChumpCountService, ChumpDayService, AuthService],
  bootstrap: [AppComponent],
  entryComponents: [
    PasswordDialogComponent
  ]
})
export class AppModule { }
