import { Component, Input } from '@angular/core';
import { Validators, FormBuilder, FormGroup, ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  templateUrl: './register-modal.component.html',
  styleUrls: ['./register-modal.component.scss']
})
export class RegisterModalComponent {
  @Input() modal: HTMLIonModalElement;

  registerObj: FormGroup;

  constructor(private authService: AuthService, private fb: FormBuilder) {
     this.registerObj = this.fb.group({
      username: [null, [Validators.required]],
      email: [null, [Validators.required]],
      password: [null, [Validators.required]],
      confirmPassword: [null, [Validators.required]],
    }, { validators: this.checkPasswords });
  }
  checkPasswords: ValidatorFn = (group: AbstractControl):  ValidationErrors | null => {
   const pass = group.get('password').value;
   const confirmPass = group.get('confirmPassword').value;
   return pass === confirmPass ? null : { notSame: true };
  };

  register(){
    this.authService.register(
      this.registerObj.controls.username.value,
      this.registerObj.controls.email.value,
      this.registerObj.controls.password.value,
      this.modal
    );
  }

  dismiss(): void {
    this.modal.dismiss('cancel');
  }

}
