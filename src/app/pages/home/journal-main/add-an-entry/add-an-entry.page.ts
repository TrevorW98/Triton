import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-an-entry',
  templateUrl: './add-an-entry.page.html',
  styleUrls: ['./add-an-entry.page.scss'],
})
export class AddAnEntryPage implements OnInit {
  backLocation = 'journal-main';
  title = 'Pet Journal';

  constructor() { }

  ngOnInit() {
  }

}
