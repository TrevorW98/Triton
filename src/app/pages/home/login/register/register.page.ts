import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
  Validator,
  ValidatorFn,
  AbstractControl,
} from '@angular/forms';
// import { Data } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  LoginForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private dService:DataService) { }

  ngOnInit() {

    this.LoginForm = this.formBuilder.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    email: ['', Validators.required],
    password: ['', [Validators.required, Validators.minLength(2)]],
    confirmPassword: ['', [Validators.required]]
  },{
    validator: this.validatePassword
  });

  }

  validatePassword(formGroup: FormGroup) {
    const control = formGroup.controls.password;
    const matchingControl = formGroup.controls.confirmPassword;
    if (matchingControl.errors && !matchingControl.errors.confirmedValidator) {
        return;
    }
    if (control.value !== matchingControl.value) {
        matchingControl.setErrors({ confirmedValidator: true });
    } else {
        matchingControl.setErrors(null);
    }
  }

  submitForm() {
    // console.log('running submit');
    if (this.LoginForm.invalid) {
      alert('Fix errors on form');
    } else {
      this.dService.addUser(this.LoginForm.value);
      alert('Submitted');
      this.LoginForm.reset();
    }
  }

}
