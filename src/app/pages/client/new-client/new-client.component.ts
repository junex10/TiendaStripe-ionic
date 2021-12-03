import { Component, OnInit } from '@angular/core';
import { USER_TYPE } from 'src/app/shared/commons/config';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-new-client',
  templateUrl: './new-client.component.html',
  styleUrls: ['./new-client.component.scss'],
})
export class NewClientComponent implements OnInit {

  roles: string[] = USER_TYPE;

  form: FormGroup

  constructor(
    private fb: FormBuilder
  ) { 
    this.form = this.fb.group({
      email: [null, [
        Validators.required,
        Validators.email
      ]],
      password: [null, [
        Validators.required,
        Validators.pattern(/^\S+$/),
        Validators.pattern(/\.*[A-Z]/),
        Validators.pattern(/\.*[0-9]/),
        Validators.min(4),
        Validators.max(10)
      ]],
      userType: ['Gerente', Validators.required],
      name: [null, Validators.required],
      lastname: [null, Validators.required],
      areaCode: ['+58', Validators.required],
      phone: [null, [
        Validators.required,
        Validators.min(8)
      ]]
    })
  }

  ngOnInit(): void {}

  selectRole = ($event: HTMLSelectElement) => this.form.get('userType').setValue($event.value);
  selectAreaCode = ($event: HTMLSelectElement) => this.form.get('areaCode').setValue($event.value);

  register = (
    email: HTMLInputElement,
    password: HTMLInputElement,
    name: HTMLInputElement,
    lastname: HTMLInputElement,
    phone: HTMLInputElement
  ) => {
    this.form.get('email').setValue(email.value);
    this.form.get('password').setValue(password.value);
    this.form.get('name').setValue(name.value);
    this.form.get('lastname').setValue(lastname.value);
    this.form.get('phone').setValue(phone.value);

    if (!this.form.invalid) {
      
    }
  }
}
