import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Observable, of } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService{

  private _user: Observable<any>;
  private _isLoggedIn: Observable<boolean> = of(false);

  get user(){
    return this._user;
  }

  get isLoggedIn(){
    return this._isLoggedIn;
  }

  constructor(public auth: AngularFireAuth, private router: Router){

  }

  tryLoginFromStorage(){
  }

  reset(email: string, modal: HTMLIonModalElement){
    this.auth.sendPasswordResetEmail(email)
    .then((result) => modal.dismiss()).catch((error) => console.log(error));
  };

  register(username: string, email: string, password: string, modal: HTMLIonModalElement){
    this.auth.createUserWithEmailAndPassword(email, password)
    .then((result) => {
        result.user.sendEmailVerification();
        result.user.updateProfile({
        displayName: username
        }).then(() => this.login(email, password, modal));
      }).catch((error) => {
      console.log(error);
    });
  }

  login(email: string, password: string, modal: HTMLIonModalElement) {
    this.auth.signInWithEmailAndPassword(email, password).then(
      (user) => {
        this._user = of(user);
        this._isLoggedIn = of(true);
        this.router.navigate(['tabs/home']);
        modal.dismiss();
      }
    );
  }

  logout() {
    this.auth.signOut().then(
      () => {
        this._isLoggedIn = of(false);
        this.router.navigate(['']);
      }
    );
  }
}
