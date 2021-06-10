import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Iquizdata } from '../interfaces/iquizdata';
import {environment} from '../../environments/environment.prod'
@Injectable({
  providedIn: 'root'
})
export class QuizService {
  private baseUrl: string = environment.URL;
  private quizUrl: string = "/Quiz"
  constructor(private http: HttpClient) { }

  public questionArr: Iquizdata[];
  public result: string;

  getQuestions(){
    return this.http.get(this.baseUrl+this.quizUrl).subscribe((quizData: Iquizdata[]) =>{
      this.questionArr = quizData;
      // console.log(this.questionArr);
    });
  }
  setResults(animal: string){
    this.result = animal;
  }


}
