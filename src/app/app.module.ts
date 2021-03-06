import 'hammerjs';
import { MatButtonModule,MatInputModule,MatDialogModule,MatFormFieldModule,MatGridListModule,MatCardModule,MatListModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
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
import { ChumpComponent } from './chump/chump.component';



@NgModule({
  declarations: [
    AppComponent,
    ChumpTypePipe,
    PasswordDialogComponent,
    ChumpComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FirebaseModule,
    FormsModule,
    HttpModule,
    MatButtonModule,MatInputModule,MatDialogModule,MatFormFieldModule,MatGridListModule,MatCardModule,MatListModule,
    FlexLayoutModule
  ],
  providers: [ChumpService, ChumpCountService, ChumpDayService, AuthService],
  bootstrap: [AppComponent],
  entryComponents: [
    PasswordDialogComponent
  ]
})
export class AppModule { }
