import { Component, OnInit } from '@angular/core';
import { IJournal } from 'src/app/interfaces/IJournal';
import { IUser } from 'src/app/interfaces/IUser';
import { DataService } from 'src/app/services/data.service';
import { JournalService } from 'src/app/services/journal.service';


@Component({
  selector: 'app-journal-main',
  templateUrl: './journal-main.page.html',
  styleUrls: ['./journal-main.page.scss'],
})
export class JournalMainPage implements OnInit {
  backLocation = 'home';
  title = 'Pet Journal';
  
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
    console.log(this.login.email);
    this.jService.getJournalList(this.login.email).subscribe((response: IJournal[])=>{
      console.log(response);
      this.journal = response;
    });
  }
  ionViewWillEnter(){
   
  }


 
  setJournalChoice(id){
    this.jService.setJournalChoice(id);
  }

  



}
