import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  LoginForm: FormGroup;


  constructor(private formBuilder: FormBuilder,
    private dService:DataService) { }

  ngOnInit() {
    this.LoginForm = this.formBuilder.group({
      Email: ['', Validators.required],
      Password: ['', [Validators.required, Validators.minLength(2)]]
    });
  }

  submitForm() {
    console.log('running submit');
    if (this.LoginForm.invalid) {
      alert('Fix errors on form');
    } else {
      this.dService.signIn(this.LoginForm.value);
      alert('Submitted');
      this.LoginForm.reset();
    }
  }

}
