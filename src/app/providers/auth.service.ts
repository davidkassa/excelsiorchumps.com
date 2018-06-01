// from https://github.com/angular/angularfire2/blob/master/docs/Auth-with-Ionic2.md
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Injectable()
export class AuthService {
  private idToken: Observable<string>;

  constructor(public afAuth: AngularFireAuth) {
    //afAuth.authState; // only triggered on sign-in/out (for old behavior use .idToken)
    this.idToken = afAuth.idToken;
  }

  get authenticated(): boolean {
    return this.idToken !== null;
  }

  signIn(password: string): Promise<boolean> {
    return this.afAuth.auth.signInWithEmailAndPassword('david.kassa@gmail.com', password)
    .then( result => this.authenticated, error => false);
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