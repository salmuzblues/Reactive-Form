import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {CustomValidators} from '../custom-validators';

@Component({
  selector: 'app-registration-reactive-form',
  templateUrl: './registration-reactive-form.component.html',
  styleUrls: ['./registration-reactive-form.component.css']
})
export class RegistrationReactiveFormComponent implements OnInit {
  EMAIL_REGEX = "[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*";

  registrationForm: FormGroup;

  constructor() { }

  ngOnInit() {
    this.registrationForm = new FormGroup({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.pattern(this.EMAIL_REGEX)]),
      gender: new FormControl('', Validators.required),
      password: new FormControl('', [CustomValidators.passwordStrength, Validators.required]),
      confirmPassword: new FormControl('', Validators.required),
      registration: new FormControl('', Validators.required),

      address: new FormGroup({
        city: new FormControl('', Validators.required),
      street: new FormControl('', Validators.required),
      country: new FormControl('', Validators.required),
        state: new FormControl('', Validators.required),
        zip: new FormControl('', Validators.required)
    })
    });

  }

  onSubmit(formValue) {
    console.log(formValue);
    console.log(this.registrationForm.value);
  }
}
