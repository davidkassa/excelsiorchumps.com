// from https://github.com/angular/angularfire2/blob/master/docs/Auth-with-Ionic2.md
import 'rxjs/add/operator/isEmpty'; 

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Injectable()
export class AuthService {
  private user: firebase.User;

  constructor(public afAuth: AngularFireAuth) {
    // only triggered on sign-in/out (for old behavior use .idToken)
    afAuth.authState.subscribe( u => this.user = u);
  }

  get authenticated(): boolean {
    return this.user == null ? false : !this.user.isAnonymous;
  }

  signIn(password: string): Promise<boolean> {
    console.log("SignIn");
    return this.afAuth.auth.signInWithEmailAndPassword('david.kassa@gmail.com', password)
  .then( (result/*:firebase.UserCredential*/) => {this.user = result.user; return this.authenticated;}, error => false);
  }
  
  signOut(): void {
    this.afAuth.auth.signOut();
  }

//   displayName(): string {
//     if (this.authState != null) {
//       return this.authState.facebook.displayName;
//     } else {
//       return '';
//     }
//   }
}