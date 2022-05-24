import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LandingPage } from './landing.page';
import { LandingPageRoutingModule } from './landing-routing.module';
import { LoginModalComponent } from './login-modal/login-modal.component';
import { ResetModalComponent } from './reset-modal/reset-modal.component';
import { RegisterModalComponent } from './register-modal/register-modal.component';



@NgModule({
  imports:[
  IonicModule,
  CommonModule,
  ReactiveFormsModule,
  FormsModule,
  RouterModule.forChild([{ path: '', component: LandingPage }]),
  LandingPageRoutingModule
],
declarations: [LandingPage, LoginModalComponent, ResetModalComponent, RegisterModalComponent]
})
export class LandingModule { }
