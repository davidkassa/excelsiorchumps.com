// from https://github.com/angular/angularfire2/blob/master/docs/Auth-with-Ionic2.md
import { Injectable } from '@angular/core';
import { AuthProviders, FirebaseAuth, FirebaseAuthState, AuthMethods } from 'angularfire2';

@Injectable()
export class AuthService {
  private authState: FirebaseAuthState;

  constructor(public auth$: FirebaseAuth) {
    //this.authState = auth$.getAuth();
    auth$.subscribe((state: FirebaseAuthState) => {
      this.authState = state;
    });
  }

  get authenticated(): boolean {
    return this.authState !== null;
  }

  signIn(password: string): firebase.Promise<boolean> {
    return this.auth$.login({
      email: 'david.kassa@gmail.com',
      password: password,
    },{
      provider: AuthProviders.Password,
      method: AuthMethods.Password
    }).then( result => this.authenticated, error => false);
  }
  
  signOut(): void {
    this.auth$.logout();
  }

//   displayName(): string {
//     if (this.authState != null) {
//       return this.authState.facebook.displayName;
//     } else {
//       return '';
//     }
//   }
}