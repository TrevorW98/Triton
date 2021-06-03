import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-events',
  templateUrl: './add-events.page.html',
  styleUrls: ['./add-events.page.scss'],
})
export class AddEventsPage implements OnInit {
  backLocation = 'events-notifs';
  title= 'Events';
  repeat = ['Daily', 'Yearly', 'Monthly', 'Hourly', 'Never'];
  pets = ["Nala", "Simba", "Tauni", "Triton"];
  constructor() { }

  ngOnInit() {
  }

}
