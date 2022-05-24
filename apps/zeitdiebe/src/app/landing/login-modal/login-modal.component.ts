import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.scss']
})
export class LoginModalComponent {
  @Input() modal: HTMLIonModalElement;

  loginObj: FormGroup;

  constructor(private authService: AuthService, private fb: FormBuilder) {
     this.loginObj =  this.fb.group({
      email: [null, [Validators.required]],
      password: [null, [Validators.required]]
    });
  }

  login(): void {
    this.authService.login(
      this.loginObj.controls.email.value,
      this.loginObj.controls.password.value,
      this.modal
    );
  }

  dismiss(): void {
    this.modal.dismiss('cancel');
  }

}
