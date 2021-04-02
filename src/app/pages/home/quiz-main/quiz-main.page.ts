import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quiz-main',
  templateUrl: './quiz-main.page.html',
  styleUrls: ['./quiz-main.page.scss'],
})
export class QuizMainPage implements OnInit {
  slideOpts = {
    initialSlide: 0,
    speed: 800,
    slidesPerView: 1,
    autoplay:true
  };

  constructor() { }

  ngOnInit() {
  }

}
