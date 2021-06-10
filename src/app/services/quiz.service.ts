import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Iquizdata } from '../interfaces/iquizdata';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  private quizUrl: string = "https://tritondatabasedeployment.azurewebsites.net/Quiz"
  constructor(private http: HttpClient) { }

  public questionArr: Iquizdata[];
  public result: string;

  getQuestions(){
    return this.http.get(this.quizUrl).subscribe((quizData: Iquizdata[]) =>{
      this.questionArr = quizData;
      // console.log(this.questionArr);
    });
  }
  setResults(animal: string){
    this.result = animal;
  }


}
