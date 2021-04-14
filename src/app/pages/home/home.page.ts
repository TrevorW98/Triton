import { Component } from '@angular/core';
import { Router } from '@angular/router';
// import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router: Router) {}

  redirect(path:string){
    this.router.navigate([path]);
  }

}
