import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(private Qservice: QuizService, private router: Router) { }

  public firstQuestions: Iquizdata[];
  public lastQuestions: Iquizdata[];
  questionNum: number = 0;
  nextBtn: boolean = false;
  selected: boolean = false;
  nextSection: boolean = false;
  group: string;
  result: string;

  //btn1
  amphibiansFish: number = 0;
  //btn2
  birdsReptiles: number = 0;
  //btn3
  insectsSmallAnimals: number = 0;
  //btn4
  catsDogs: number = 0;


  ngOnInit() {
    this.firstQuestions = this.Qservice.questionArr.filter((s) => {
      return s.important == true;
    });
    // console.log(this.firstQuestions);
  }

  nextQuestion() {
    let btn1 = document.getElementById("btn1");
    let btn2 = document.getElementById("btn2");
    let btn3 = document.getElementById("btn3");
    let btn4 = document.getElementById("btn4");
    if (btn1.hasAttribute("checked")) {
      this.amphibiansFish++;
    } else if (btn2.hasAttribute("checked")) {
      this.birdsReptiles++;
    } else if (btn3.hasAttribute("checked")) {
      this.insectsSmallAnimals++;
    } else if (btn4.hasAttribute("checked")) {
      this.catsDogs++;
    };
    // console.log(this.amphibiansFish, this.birdsReptiles, this.insectsSmallAnimals, this.catsDogs);
    btn1.removeAttribute("checked");
    btn2.removeAttribute("checked");
    btn3.removeAttribute("checked");
    btn4.removeAttribute("checked");
    if(this.questionNum < 10){
      this.questionNum++;
      this.deleteNextBtn();
    } else if(this.questionNum >= 10) {
      btn1.setAttribute("disabled", "true");
      btn2.setAttribute("disabled", "true");
      btn3.setAttribute("disabled", "true");
      btn4.setAttribute("disabled", "true");
      this.narrowResults();
    }
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
      if(this.questionNum < 10){
        next.innerText = "Next Question";
      } else if(this.questionNum == 10){
        next.innerText = "Submit answers";
      }
      holder.appendChild(next);
      this.nextBtn = true;
    }
  }
  deleteNextBtn(): any {
    let next = document.getElementById("next");
    next.remove();
    this.nextBtn = false;
  }
  narrowResults() {
    // console.log("running")
    if (this.amphibiansFish > this.birdsReptiles && this.amphibiansFish > this.insectsSmallAnimals && this.amphibiansFish > this.catsDogs) {
      let r = Math.floor(Math.random() * 2);
      if (r === 1) {
        this.result = "Amphibians";
      } else {
        this.result = "Fish";
      }
      // console.log(this.result);
      this.Qservice.setResults(this.result);
      // console.log(this.Qservice.result);
     
    } else if (this.birdsReptiles > this.amphibiansFish && this.birdsReptiles > this.insectsSmallAnimals && this.birdsReptiles > this.catsDogs) {
      let r = Math.floor(Math.random() * 2);
      if (r == 1) {
        this.result = "Birds";
      } else {
        this.result = "Reptiles";
      }
      // console.log(this.result);
      this.Qservice.setResults(this.result);
      console.log(this.Qservice.result);
    } else if (this.insectsSmallAnimals > this.amphibiansFish && this.insectsSmallAnimals > this.birdsReptiles && this.insectsSmallAnimals > this.catsDogs) {
      let r = Math.floor(Math.random() * 2);
      if (r == 1) {
        this.result = "Insects";
      } else {
        this.result = "Small animals";
      }
      // console.log(this.result);
      this.Qservice.setResults(this.result);
      // console.log(this.Qservice.result);
    } else if (this.catsDogs > this.amphibiansFish && this.catsDogs > this.insectsSmallAnimals && this.catsDogs > this.birdsReptiles) {
      let r = Math.floor(Math.random() * 2);
      if (r == 1) {
        this.result = "Cats";
      } else {
        this.result = "Dogs";
      }
      // console.log(this.result);
      this.Qservice.setResults(this.result);
      console.log(this.Qservice.result);
    }
    this.router.navigate(['results']);
  }
}
