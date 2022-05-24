/* eslint-disable @angular-eslint/component-selector */
/* eslint-disable @angular-eslint/component-class-suffix */
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { User as FirebaseUser } from 'firebase/auth';
import { Observable } from 'rxjs';

import { ModalController } from '@ionic/angular';
import { LoginModalComponent } from './login-modal/login-modal.component';
import { ResetModalComponent } from './reset-modal/reset-modal.component';
import { RegisterModalComponent } from './register-modal/register-modal.component';

@Component({
  templateUrl: './landing.page.html',
  styleUrls: ['./landing.page.scss']
})
export class LandingPage implements OnInit{
  user: Observable<FirebaseUser>;
  isLoggedIn: Observable<boolean>;

  constructor(public authService: AuthService, public modalController: ModalController) {
  }

  ngOnInit(): void{
    this.user = this.authService.user;
    this.isLoggedIn = this.authService.isLoggedIn;
  }

  async presentLoginModal() {
    const modal = await this.modalController.create({
      component: LoginModalComponent
    });
    return await modal.present();
  }

  async presentResetModal() {
    const modal = await this.modalController.create({
      component: ResetModalComponent
    });
    return await modal.present();
  }

  async presentRegisterModal() {
    const modal = await this.modalController.create({
      component: RegisterModalComponent
    });
    return await modal.present();
  }
}
