import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
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
      this.dService.addUser(this.LoginForm.value);
      alert('Submitted');
      this.LoginForm.reset();
    }
  }

}
