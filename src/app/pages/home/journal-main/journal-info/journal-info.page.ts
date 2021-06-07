import { Component, OnInit } from '@angular/core';
import { IJournal } from 'src/app/interfaces/IJournal';
import { JournalService } from 'src/app/services/journal.service';
import { IUser } from 'src/app/interfaces/IUser';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-journal-info',
  templateUrl: './journal-info.page.html',
  styleUrls: ['./journal-info.page.scss'],
})
export class JournalInfoPage implements OnInit {

  backLocation = 'journal-entries';
  title = 'Journal Info';
  constructor(private jService: JournalService) { }

  public journal: IJournal[];

  ngOnInit() {
    this.jService.getJournalChosen().subscribe((response: IJournal[]) => {
      this.journal = response;
      console.log(this.journal);
    });
  }
  

}
