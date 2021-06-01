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
  amphibiansFish: number = 0;
  //btn2
  birdsReptiles: number = 0;
  //btn3
  insectsSmallAnimals: number = 0;
  //btn4
  catsDogs: number = 0;

  nextBtn: boolean = false;
  selected: boolean = false;
  result: string;
  ngOnInit() {
    this.Questions = this.Qservice.questionArr;
    console.log(this.Questions);
  }
  nextQuestion() {
    this.questionNum++;
    let btn1 = document.getElementById("btn1");
    let btn2 = document.getElementById("btn2");
    let btn3 = document.getElementById("btn3");
    let btn4 = document.getElementById("btn4");
    if(btn1.hasAttribute("checked")){
      this.amphibiansFish++;
    }else if( btn2.hasAttribute("checked")){
      this.birdsReptiles++;
    } else if(btn3.hasAttribute("checked")){
      this.insectsSmallAnimals++;
    } else if(btn4.hasAttribute("checked")) {
      this.catsDogs++;
    };
    console.log(this.amphibiansFish, this.birdsReptiles, this.insectsSmallAnimals, this.catsDogs);
    btn1.removeAttribute("checked");
    btn2.removeAttribute("checked");
    btn3.removeAttribute("checked");
    btn4.removeAttribute("checked");
    this.deleteNextBtn();
  }

  choiceSelect1() {
    //This handles limiting the number of selected answers to one
    let btn1 = document.getElementById("btn1");
    let btn2 = document.getElementById("btn2");
    let btn3 = document.getElementById("btn3");
    let btn4 = document.getElementById("btn4");
    btn1.setAttribute("checked", "true");
    btn2.removeAttribute("checked");
    btn3.removeAttribute("checked");
    btn4.removeAttribute("checked");
    this.generateNextBtn();
  }
  choiceSelect2() {
    //This handles limiting the number of selected answers to one
    let btn1 = document.getElementById("btn1");
    let btn2 = document.getElementById("btn2");
    let btn3 = document.getElementById("btn3");
    let btn4 = document.getElementById("btn4");
    btn2.setAttribute("checked", "true");
    btn1.removeAttribute("checked");
    btn3.removeAttribute("checked");
    btn4.removeAttribute("checked");
    this.generateNextBtn();
  }
  choiceSelect3() {
    //This handles limiting the number of selected answers to one
    let btn1 = document.getElementById("btn1");
    let btn2 = document.getElementById("btn2");
    let btn3 = document.getElementById("btn3");
    let btn4 = document.getElementById("btn4");
    btn3.setAttribute("checked", "true");
    btn4.removeAttribute("checked");
    btn1.removeAttribute("checked");
    btn2.removeAttribute("checked");
    this.generateNextBtn();
  }
  choiceSelect4() {
    //This handles limiting the number of selected answers to one
    let btn1 = document.getElementById("btn1");
    let btn2 = document.getElementById("btn2");
    let btn3 = document.getElementById("btn3");
    let btn4 = document.getElementById("btn4");
    btn4.setAttribute("checked", "true");
    btn1.removeAttribute("checked");
    btn2.removeAttribute("checked");
    btn3.removeAttribute("checked");
    this.generateNextBtn();
  }
  generateNextBtn() {
    if (!this.nextBtn) {
      let next = document.createElement('button');
      let holder = document.getElementById("holder");
      next.setAttribute("mat-button", "");
      next.id = "next"
      next.classList.add("answerBG", "answerBtn");
      next.innerText = "Next Question";
      holder.appendChild(next);
      this.nextBtn = true;
    }
  }
  deleteNextBtn(): any {
    let next = document.getElementById("next");
    next.remove();
    this.nextBtn = false;
  }
  generateResult(){
   let result = Math.max(this.amphibiansFish,this.birdsReptiles,this.insectsSmallAnimals,this.catsDogs)
   console.log(result);
  }


}
