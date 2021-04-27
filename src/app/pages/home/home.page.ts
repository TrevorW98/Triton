import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { Ilogin } from 'src/app/interfaces/ilogin';
// import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  SignedInUser:Ilogin ={
    Email: "",
    Password: ""
  }
  constructor(private router: Router , private dService:DataService) {}

  redirect(path:string){
    this.router.navigate([path]);
  }

  ngOnInit(): void {
    this.SignedInUser = this.dService.getloginOBJ()
  }

}
