import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in-suggestion',
  templateUrl: './sign-in-suggestion.component.html',
  styleUrls: ['./sign-in-suggestion.component.scss'],
})
export class SignInSuggestionComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {}

  redirect(){
    this.router.navigate(['login']);
  }

}
