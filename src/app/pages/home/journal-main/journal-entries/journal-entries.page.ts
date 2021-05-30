import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-journal-entries',
  templateUrl: './journal-entries.page.html',
  styleUrls: ['./journal-entries.page.scss'],
})
export class JournalEntriesPage implements OnInit {
  backLocation = 'home';
  title = 'Pet Journal';


  // inputting the date and grabbing ALL NOTES from that date
  entry = ['Yoda had fun today but fell really hard', 'Simba peed behind Christy again. She stepped in it.. again..', "Nala is a good girl"]


  constructor() { }

  ngOnInit() {
  }

}
