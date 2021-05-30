import { Component, OnInit } from '@angular/core';
import { Iquizdata } from 'src/app/interfaces/iquizdata';
import { QuizService } from 'src/app/services/quiz.service';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.page.html',
  styleUrls: ['./questions.page.scss'],
})
export class QuestionsPage implements OnInit {
  title = 'Pick My Pet';
  backLocation = 'quiz-main';

  constructor(private Qservice: QuizService) { }

  public Questions: Iquizdata[];
  questionNum: number = 0;
  //btn1
  amphibiansFish: number;
  //btn2
  birdsReptiles: number;
  //btn3
  insectsSmallAnimals: number;
  //btn4
  catsDogs: number;
  nextBtn: boolean = false;
  selected: boolean = false;
  ngOnInit() {
    this.Questions = this.Qservice.questionArr;
    console.log(this.Questions);
  }
  nextQuestion(){
    this.questionNum++;
    this.deleteNextBtn();
    let btn1 = document.getElementById("btn1");
    let btn2 = document.getElementById("btn2");
    let btn3 = document.getElementById("btn3");
    let btn4 = document.getElementById("btn4");
    btn1.removeAttribute("disabled");
    btn2.removeAttribute("disabled");
    btn3.removeAttribute("disabled");
    btn4.removeAttribute("disabled");
  }
  
  choiceSelect1(){
    if(!this.selected){
      let btn1 = document.getElementById("btn1");
      let btn2 = document.getElementById("btn2");
      let btn3 = document.getElementById("btn3");
      let btn4 = document.getElementById("btn4");
      btn1.removeAttribute("disabled");
      btn2.setAttribute("disabled", "true");
      btn3.setAttribute("disabled", "true");
      btn4.setAttribute("disabled", "true");
      this.generateNextBtn();
      this.selected = true;
    }
    
  }
  choiceSelect2(){
    if(!this.selected){
      let btn1 = document.getElementById("btn1");
      let btn2 = document.getElementById("btn2");
      let btn3 = document.getElementById("btn3");
      let btn4 = document.getElementById("btn4");
      btn2.removeAttribute("disabled");
      btn1.setAttribute("disabled", "true");
      btn3.setAttribute("disabled", "true");
      btn4.setAttribute("disabled", "true");
      this.generateNextBtn();
    }
  }
  choiceSelect3(){
    if(!this.selected){
      let btn1 = document.getElementById("btn1");
      let btn2 = document.getElementById("btn2");
      let btn3 = document.getElementById("btn3");
      let btn4 = document.getElementById("btn4");
      btn3.removeAttribute("disabled");
      btn4.setAttribute("disabled", "true");
      btn1.setAttribute("disabled", "true");
      btn2.setAttribute("disabled", "true");
      this.generateNextBtn();
    }
  }
  choiceSelect4(){
    if(!this.selected){
      let btn1 = document.getElementById("btn1");
      let btn2 = document.getElementById("btn2");
      let btn3 = document.getElementById("btn3");
      let btn4 = document.getElementById("btn4");
      btn4.removeAttribute("disabled");
      btn1.setAttribute("disabled", "true");
      btn2.setAttribute("disabled", "true");
      btn3.setAttribute("disabled", "true");
      this.generateNextBtn();
    }
  }
  generateNextBtn(){
    if(!this.nextBtn){
      let next = document.createElement('button');
      let holder = document.getElementById("holder");
      next.setAttribute("mat-button", "");
      next.id = "next"
      next.classList.add("answerBG", "answerBtn");
      next.innerText="Next Question";
      holder.appendChild(next);
      this.nextBtn = true;
    }
  }
  deleteNextBtn(): any{
    let next = document.getElementById("next");
    next.remove();
    this.nextBtn = false;
  }
  

}
