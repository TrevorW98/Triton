import { Component, OnInit } from '@angular/core';
import { IndexService } from 'src/app/services/index.service';
import { QuizService } from 'src/app/services/quiz.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.page.html',
  styleUrls: ['./results.page.scss'],
})
export class ResultsPage implements OnInit {
  backLocation = 'quiz-main';
  title = 'Pick My Pet';

  constructor(private qService: QuizService, private iService: IndexService) { }

  public result: string;
  public description: string
  public animal1: string;
  public animal2: string;
  public animal3: string;
  public animal4: string;
  public animalImg: string;

  ngOnInit() {
    this.getAnimals();
    this.result = this.qService.result;
    this.setDescription();
  }
  setDescription(){
    let indexBtn = document.getElementById("indexBtn");
    switch(this.result){
      case "Dogs": this.description = "Based on your answers, it looks like a dog would be the best fit for you! Dogs are versatile and come in all shapes and sizes! A dog will always be a part of your family, as long as you give them enough love and care, and an all around great pet. Below are a few great breeds of dogs that could be your future pet."; 
      this.animal1 = ""; this.animal2 = ""; this.animal3 = ""; this.animal4 = ""; this.animalImg="../../../../../assets/dog2.jpg";
      indexBtn.classList.add("dog");
      break;

      case "Cats": this.description = ""; 
      this.animal1 = ""; this.animal2 = ""; this.animal3 = ""; this.animal4 = "";this.animalImg="../../../../../assets/quizCat.jpg";
      indexBtn.classList.add("cat");
      break;

      case "Insects": this.description = ""; 
      this.animal1 = ""; this.animal2 = ""; this.animal3 = ""; this.animal4 = "";this.animalImg="../../../../../assets/quizBug.jpg";
      indexBtn.classList.add("insect");
      break;

      case "Reptiles": this.description = ""; 
      this.animal1 = ""; this.animal2 = ""; this.animal3 = ""; this.animal4 = "";this.animalImg="../../../../../assets/quizGecko.jpg";
      indexBtn.classList.add("reptile");
      break;

      case "Amphibians": this.description = ""; 
      this.animal1 = ""; this.animal2 = ""; this.animal3 = ""; this.animal4 = "";this.animalImg="../../../../../assets/quizFrog.jpg";
      indexBtn.classList.add("frog");
      break;

      case "Small Animals": this.description = ""; 
      this.animal1 = ""; this.animal2 = ""; this.animal3 = ""; this.animal4 = "";this.animalImg="../../../../../assets/quizHamster.jpg";
      indexBtn.classList.add("small");
      break;

      case "Birds": this.description = ""; 
      this.animal1 = ""; this.animal2 = ""; this.animal3 = ""; this.animal4 = "";this.animalImg="../../../../../assets/quizParrot.jpg";
      indexBtn.classList.add("bird");
      break;

      case "Aquatics": this.description = ""; 
      this.animal1 = ""; this.animal2 = ""; this.animal3 = ""; this.animal4 = "";this.animalImg="../../../../../assets/quizFish.jpg";
      indexBtn.classList.add("dog");
      break;

    }
  }
  setCategory(string){
    this.iService.setCategory(string);
  }
  getAnimals(): void{
    this.iService.getAnimals();
  }
 

}
