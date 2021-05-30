import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { ILogin } from 'src/app/interfaces/ILogin';
import { IEvent } from 'src/app/interfaces/IEvent';
import { EventService } from 'src/app/services/event.service';
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
  constructor(
    private router: Router,
    private dService: DataService,
    private eventService: EventService
  ) {}

  events: IEvent[] = [];

  redirect(path: string) {
    this.router.navigate([path]);
  }

  ngOnInit(): void {
    this.SignedInUser = this.dService.getlogin();
    this.getEvents();
  }

  getEvents(): void {
    this.eventService.getEvents().subscribe((events) => {
      this.events = events;
    });
  }
  
}
