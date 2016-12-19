import { ModuleWithProviders} from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../../environments/environment';

const firebaseConfig = environment.firebaseConfig;

export const FirebaseModule = AngularFireModule.initializeApp(firebaseConfig);