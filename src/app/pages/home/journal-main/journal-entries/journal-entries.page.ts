import { Component, OnInit } from '@angular/core';
import { IJournal } from 'src/app/interfaces/IJournal';
import { JournalService } from 'src/app/services/journal/journal.service';

@Component({
  selector: 'app-journal-entries',
  templateUrl: './journal-entries.page.html',
  styleUrls: ['./journal-entries.page.scss'],
})
export class JournalEntriesPage implements OnInit {
  backLocation = 'journal-main';
  title = 'Pet Journal';
  
  currentDetail: string;

  // inputting the date and grabbing ALL NOTES from that date
  entry = ['Yoda had fun today but fell really hard', 'Simba peed behind Christy again. She stepped in it.. again..', "Nala is a good girl"]

  constructor(private jService:JournalService) { }


  ngOnInit() {

  }

}
