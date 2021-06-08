import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { ILogin } from 'src/app/interfaces/ILogin';
import { IEvent } from 'src/app/interfaces/IEvent';
import { EventService } from 'src/app/services/event.service';
import { IUser } from 'src/app/interfaces/IUser';
import { MypetsService } from 'src/app/services/mypets.service';
import { IMyPets } from 'src/app/interfaces/IMyPets';
import { ResultsPageRoutingModule } from './quiz-main/results/results-routing.module';
import { JournalService } from 'src/app/services/journal.service';
import { IJournal } from 'src/app/interfaces/IJournal';
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
    staySignedIn: false,
  };

  User: IUser = {
    id: 0,
    email: '',
    profilePicture: '',
    staySignedIn: false,
    name: ''
  };  
  constructor(
    private router: Router,
    public dService: DataService,
    private eventService: EventService,
    public petsService: MypetsService,
    private journalService: JournalService
  ) {}

  events: IEvent[] = [];
  feeds: IEvent[] = [];
  petNames = {};

  redirect(path: string) {
    if(path == 'quiz-main' || path == 'index-main'){
      this.router.navigate([path]);
    }
    else if(this.dService.User.id == 0){
      return;
    }
    this.router.navigate([path]);

  }

  ngOnInit(): void {
    // this.SignedInUser = this.dService.getlogin();
    // console.log(this.SignedInUser);
    this.dService.checkIfSignedIn();
   
  }
  
  ionViewWillEnter(): void {
    if(this.dService.User.id != 0){
      this.petsService.getMyPets(this.dService.User.id)
    .subscribe((pets: IMyPets[]) => {
      console.log(pets);
      this.petsService.myPets = pets;
      console.log(this.petsService.myPets);
    });
    this.getEvents();
    this.petsService.myPets.forEach(pet =>
      this.petNames[pet.id.toString()] = pet.petName);
    
  };
  }

  getEvents(): void {
    this.eventService.getEvents().subscribe((events) => {
      this.events = events.filter(e => e.eventType.toLowerCase() != 'feeding');
      this.feeds = events.filter(e => e.eventType.toLowerCase() == 'feeding');
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
