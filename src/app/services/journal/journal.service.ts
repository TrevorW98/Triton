import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IJournal } from 'src/app/interfaces/IJournal';

@Injectable({
  providedIn: 'root'
})
export class JournalService {

  constructor(private http: HttpClient) { }
  private baseUrl = 'http://localhost:5000';
  // private journalEnd: string = '/journal?userid=';
  private journalEnd: string = '/journal';
  public journal: IJournal[];
  public chosenDate: string;


  getJournal(){
    // getJournal(id){
    // return this.http.get(this.baseUrl+this.journalEnd+id);
    console.log(this.http.get(this.baseUrl+this.journalEnd))
    return this.http.get(this.baseUrl+this.journalEnd);
  }

  dateChoice(date: string): void{
    this.chosenDate = date;
  }

  setDateArr(journalDate: IJournal[]){
    this.journal = journalDate;
  }


}
