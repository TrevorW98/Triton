import { Component, OnInit } from '@angular/core';
import { IJournal } from 'src/app/interfaces/IJournal';
import { IUser } from 'src/app/interfaces/IUser';
import { DataService } from 'src/app/services/data.service';
import { JournalService } from 'src/app/services/journal/journal.service';


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
  constructor(private jService: JournalService, private dService: DataService) { }

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
    this.jService.getJournal().subscribe((response: IJournal[])=>{
      console.log(response);
      this.journal = response;
      this.jService.setDateArr(this.journal);
    })
  }

  setDate(theDate: string){
    this.jService.dateChoice(theDate);
  }




}
