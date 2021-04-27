import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-journal-main',
  templateUrl: './journal-main.page.html',
  styleUrls: ['./journal-main.page.scss'],
})
export class JournalMainPage implements OnInit {
  backLocation = 'home';
  title = 'Pet Journal';

  constructor() { }

  ngOnInit() {
  }

}
