/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

describe('AppComponent', () => {
  beforeEach(() => {

    // inject([FirebaseApp, AngularFire], (firebaseApp: firebase.app.App, _af: AngularFire) => {
    //   angularFire2 = _af;
    //   app = firebaseApp;
    //   rootRef = app.database().ref();
    //   questionsRef = rootRef.child('questions');
    //   listOfQuestionsRef = rootRef.child('list-of-questions');
    // })();

    TestBed.configureTestingModule({
      providers: [
        AppComponent
      ],
      imports: [
        AngularFire
      ]
    });
    TestBed.compileComponents();
  });

  xit('should create the app', async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  xit(`should have as title 'app works'`, async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app works!');
  }));

  xit('should render title in a h1 tag', async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('app works!');
  }));
});
