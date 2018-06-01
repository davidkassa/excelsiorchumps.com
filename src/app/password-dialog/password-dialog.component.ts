import { Component, HostBinding } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { AuthService } from '../providers/auth.service';

@Component({
  selector: 'ec-password-dialog',
  templateUrl: './password-dialog.component.html',
  styleUrls: ['./password-dialog.component.css'],
  // animations: [
  //   trigger('shake', [
  //     state('visible', style({
  //       backgroundColor: '#eee',
  //       transform: 'scale(1)'
  //     })),
  //     state('error',   style({
  //       backgroundColor: '#cfd8dc',
  //       transform: 'scale(1.1)'
  //     })),    ])
  // ]
})
export class PasswordDialogComponent {
  @HostBinding('class.shake') errorMessage: string;
  password: string;
  constructor(public dialogRef: MatDialogRef<PasswordDialogComponent>, private _auth: AuthService) { 
    this.password = "";
  }
  
  validatePassword() : void {
    //dialogRef.close('yes')
    this.errorMessage = "";
    this._auth.signIn(this.password).then(
        result => { 
          if(result) {
            //good
            this.dialogRef.close(result);
          }
          else {
            this.errorMessage = "Invalid password";
          }
          
        },
        error => { 
          console.log("error: " + error);
          this.errorMessage = "Unknown error"
        }
      );
  }

}
