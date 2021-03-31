import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  LoginForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {this.LoginForm = this.formBuilder.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    email: ['', Validators.required],
    password: ['', [Validators.required, Validators.minLength(2)]]
  });

  }

  submitForm() {
    console.log('running submit');
    if (this.LoginForm.invalid) {
      alert('Fix errors on form');
    } else {
      alert('Submitted');
      this.LoginForm.reset();
    }
  }

}
