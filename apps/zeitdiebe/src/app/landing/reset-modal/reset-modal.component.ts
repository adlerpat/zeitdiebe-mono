/* eslint-disable @angular-eslint/component-selector */
/* eslint-disable @angular-eslint/component-class-suffix */
import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  templateUrl: './reset-modal.component.html',
  styleUrls: ['./reset-modal.component.scss']
})
export class ResetModalComponent {
  @Input() modal: HTMLIonModalElement;

  resetObj: FormGroup;

  constructor(private authService: AuthService, private fb: FormBuilder) {
    this.resetObj =  this.fb.group({
      email: [null, [Validators.required]]
    });
  }
  reset(): void {
    this.authService.reset(this.resetObj.controls.email.value, this.modal);
  }

  dismiss(): void {
    this.modal.dismiss('cancel');
  }

}
