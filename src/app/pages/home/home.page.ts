import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { ILogin } from 'src/app/interfaces/ILogin';
import { IEvent } from 'src/app/interfaces/IEvent';
import { EventService } from 'src/app/services/event.service';
import { IUser } from 'src/app/interfaces/IUser';
import { MypetsService } from 'src/app/services/mypets.service';
import { IMyPets } from 'src/app/interfaces/IMyPets';
// import {MatButtonModule} from '@angular/material/button';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  backLocation: string = 'home';
  title: string = 'Home';

  SignedInUser: ILogin = {
    Email: '',
    Password: '',
  };
  User: IUser = {
    id: 0,
    email: '',
    profilePicture: '',
    StaySignedIn: false,
  };  
  constructor(
    private router: Router,
    public dService: DataService,
    private eventService: EventService,
    public petsService: MypetsService
  ) {}

  events: IEvent[] = [];

  redirect(path: string) {
    this.router.navigate([path]);
  }

  ngOnInit(): void {
    this.SignedInUser = this.dService.getlogin();
    console.log(this.SignedInUser);
    this.getEvents();
  }

  ionViewWillEnter(): void {
    this.User = this.dService.User;
    console.log(this.User);
    this.petsService.getMyPets(this.User.id)
      .subscribe((pets: IMyPets[]) => {
        console.log(pets);
        this.petsService.myPets = pets;
        console.log(this.petsService.myPets);
      });
  }

  getEvents(): void {
    this.eventService.getEvents().subscribe((events) => {
      this.events = events;
    });
  }
  routeToLogin(string){
    if(this.SignedInUser.Email == ''){
      this.router.navigate(['login'])
    } else {
     this.redirect(string);
    }
  }

  
}
