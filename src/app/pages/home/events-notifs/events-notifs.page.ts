import { Component, OnInit } from '@angular/core';
import { IEvent } from 'src/app/interfaces/IEvent';
import { IUser } from 'src/app/interfaces/IUser';
import { DataService } from 'src/app/services/data.service';
import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-events-notifs',
  templateUrl: './events-notifs.page.html',
  styleUrls: ['./events-notifs.page.scss'],
})
export class EventsNotifsPage implements OnInit {
  backLocation = 'home';
  title = 'Events';
  public event: IEvent[];
  constructor(private eService: EventService, private dService: DataService) { }
  public login: IUser = {
    id: 0,
    email: '',
    profilePicture: '',
    staySignedIn: false,
    name: ''
  };

  ngOnInit() {
    this.login = this.dService.User;
    // user Id will eventually go into the getUserEvents(userId)
    // this.eService.getUserEvents('4').subscribe((response:IEvent[]) => {
    //   console.log(response);
    //   this.event = response;
    // });
  }





}
