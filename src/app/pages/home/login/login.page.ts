import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  LoginForm: FormGroup;


  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.LoginForm = this.formBuilder.group({
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
