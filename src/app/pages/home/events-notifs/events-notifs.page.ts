import { Component, OnInit } from '@angular/core';
import { IEvent } from 'src/app/interfaces/IEvent';
import { IMyPets } from 'src/app/interfaces/IMyPets';
import { IUser } from 'src/app/interfaces/IUser';
import { DataService } from 'src/app/services/data.service';
import { EventService } from 'src/app/services/event.service';
import { MypetsService } from 'src/app/services/mypets.service';

@Component({
  selector: 'app-events-notifs',
  templateUrl: './events-notifs.page.html',
  styleUrls: ['./events-notifs.page.scss'],
})
export class EventsNotifsPage implements OnInit {
  backLocation = 'home';
  title = 'Events';
  public event: IEvent[];
  pets = {};
  constructor(
    private eService: EventService,
    private dService: DataService,
    public petsService: MypetsService
    ) { }
  public login: IUser = {
    id: 0,
    email: '',
    profilePicture: '',
    staySignedIn: false,
    name: ''
  };

  ionViewWillEnter() {
    this.petsService.myPets.forEach( pet => {
      this.pets[pet.id.toString()] = pet.petName;
    });
  }

  ngOnInit() {
    this.login = this.dService.User;
    // user Id will eventually go into the getUserEvents(userId)
    this.eService.getUserEvents(this.login.id).subscribe((response:IEvent[]) => {
      // console.log(response);
      this.event = response;
      // console.log(this.event);
    });
  }





}
