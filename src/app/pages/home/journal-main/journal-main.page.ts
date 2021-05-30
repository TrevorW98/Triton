import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-journal-main',
  templateUrl: './journal-main.page.html',
  styleUrls: ['./journal-main.page.scss'],
})
export class JournalMainPage implements OnInit {
  backLocation = 'home';
  title = 'Pet Journal';
  entry = ["February 20th, 2021", "February 21st, 2021"];
  // would have to pull dates for this entry, then send to the journal page!
  constructor() { }

  ngOnInit() {
  }

}
