import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.page.html',
  styleUrls: ['./questions.page.scss'],
})
export class QuestionsPage implements OnInit {
  title = 'Pick My Pet';
  backLocation = 'quiz-main';

  constructor() { }

  ngOnInit() {
  }

}
