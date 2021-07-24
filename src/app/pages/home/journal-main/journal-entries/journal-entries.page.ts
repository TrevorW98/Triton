import { Component, OnInit } from '@angular/core';
import { IJournal } from 'src/app/interfaces/IJournal';
import { IUser } from 'src/app/interfaces/IUser';
import { DataService } from 'src/app/services/data.service';
import { JournalService } from 'src/app/services/journal.service';

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

  constructor(
    private jService: JournalService,
    private dService: DataService) { }

  public login: IUser = {
    id: 0,
    email: '',
    profilePicture: '',
    staySignedIn: false,
    name: ''

  };
  public journal: IJournal[];


  ngOnInit() {
    this.login = this.dService.User;
    // console.log(this.login.email);
    this.jService.getJournalList(this.login.email).subscribe((response: IJournal[]) => {
      // console.log(response);
      this.journal = response;
    });
  }

  setJournalChoice(id){
    this.jService.setJournalChoice(id);
  }

}
