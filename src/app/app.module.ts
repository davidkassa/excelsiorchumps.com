import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';

import { AppComponent } from './app.component';


export const firebaseConfig = {
    apiKey: "AIzaSyCKO3TzqLMFaf_OkHWne7Cs-gFe3nDPr-o",
    authDomain: "excelsior-chumps.firebaseapp.com",
    databaseURL: "https://excelsior-chumps.firebaseio.com",
    storageBucket: "excelsior-chumps.appspot.com",
    messagingSenderId: "173877803309"
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
