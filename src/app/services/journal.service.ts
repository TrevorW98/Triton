import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IJournal } from 'src/app/interfaces/IJournal';
import {environment} from '../../environments/environment.prod'
@Injectable({
  providedIn: 'root'
})
export class JournalService {

  constructor(private http: HttpClient) { }
  private baseUrl: string = environment.URL;
  // private baseUrl = 'http://localhost:5000';
  private journalListEnd: string = '/journal?email=';
  private journalSingle: string = '/journal/info?id=';
  private journalAdd: string = "/journal/new";
  // private journalEnd: string = '/journal';
  public journal: IJournal[];
  public chosenDate: string;
  public chosenJournal: string;


  getJournalList(email){
    // console.log(email);
    return this.http.get(this.baseUrl+this.journalListEnd+email);
  }
  getJournalChosen(){
    // console.log(this.chosenJournal);
    return this.http.get(this.baseUrl+this.journalSingle+this.chosenJournal);
  }

  dateChoice(date: string): void{
    this.chosenDate = date;
  }

  setDateArr(journalDate: IJournal[]){
    this.journal = journalDate;
  }


  setJournalChoice(id){
    this.chosenJournal = id.toString();
  }

  newEntry(newEntry: IJournal){
   return this.http.post(this.baseUrl+this.journalAdd, newEntry).toPromise();
  }


}
