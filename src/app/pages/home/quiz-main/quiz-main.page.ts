import { Component, OnInit } from '@angular/core';
import { QuizService } from 'src/app/services/quiz.service';
@Component({
  selector: 'app-quiz-main',
  templateUrl: './quiz-main.page.html',
  styleUrls: ['./quiz-main.page.scss'],
})
export class QuizMainPage implements OnInit {
  backLocation = 'home';
  title = 'Pick My Pet';
  slideOpts = {
    initialSlide: 0,
    speed: 800,
    slidesPerView: 1,
    autoplay:true
  };
  //Quiz logic: each button gives 1 point to two categories
  //Categories are as such: (dogs, cats) (insects, small animals) (amphibians, fish) (birds, reptiles)
  //Final result will give two options instead of one
  //Category with most points will be displayed.
  //Buttons will have hardcoded point value
  //Questions can then be randomized with same results because answers do not change position

  constructor(private Qservice: QuizService) { }

  

  ngOnInit() {
    this.getQuiz();
    
  }
  getQuiz(){
    this.Qservice.getQuestions();
  }

}
