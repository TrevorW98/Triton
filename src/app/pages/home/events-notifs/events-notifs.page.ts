import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events-notifs',
  templateUrl: './events-notifs.page.html',
  styleUrls: ['./events-notifs.page.scss'],
})
export class EventsNotifsPage implements OnInit {
  backLocation = 'home';
  title = 'Events';

  constructor() { }

  ngOnInit() {
  }

}
