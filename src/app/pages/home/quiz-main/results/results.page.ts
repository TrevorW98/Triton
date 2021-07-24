import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(private qService: QuizService, private iService: IndexService, private router: Router) { }

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
      case "Dogs": this.description = "Based on your answers, a dog would be the best selection for you! Dogs are versatile and come in all shapes, sizes, and personalities. A dog will always be a part of your family, as long as you give them enough love and care, and an all around great pet. Below are a few great breeds of dogs that could be your future pet."; 
      this.animal1 = "Basset Hound"; this.animal2 = "Chow Chow"; this.animal3 = "Shiba Inu"; this.animal4 = "Shar Pei"; this.animalImg="../../../../../assets/dog2.jpg";
      indexBtn.classList.add("dog");
      this.setCategory("Dog");
      break;

      case "Cats": this.description = "Based on your answers, a cat would be the best selection for you! Cats are like room mates, they may be your best friend, but remember to always respect their boundaries and know their limits. Below are a few great breeds of cats that could be your future pet."; 
      this.animal1 = "American Short hair"; this.animal2 = "Maine Coon"; this.animal3 = "Sphynx"; this.animal4 = "Russian Blue";this.animalImg="../../../../../assets/quizCat.jpg";
      indexBtn.classList.add("cat");
      this.setCategory("Cat");
      break;

      case "Insects": this.description = "Based on your answers, a bug (or bugs) may be the best selection for you! Despite their outwards appearance, bugs can be great pets! Below are some species to explore."; 
      this.animal1 = "Hercules Beetle"; this.animal2 = "Jumping Spider"; this.animal3 = "Phasmatodea"; this.animal4 = "Curlyhair Tarantula";this.animalImg="../../../../../assets/quizBug.jpg";
      indexBtn.classList.add("insect");
      this.setCategory("Insect");
      break;

      case "Reptiles": this.description = "Based on your answers, a reptile would be the best selection for you! Reptiles are beautiful and there are many docile species kept in captivity. As long as you don't mind scales, reptiles are sure to make a fulfilling pet! Below are a few species of reptiles that could be your future pet."; 
      this.animal1 = "Bearded Dragon"; this.animal2 = "Corn Snake"; this.animal3 = "Crested Gecko"; this.animal4 = "Rainbow Boa";this.animalImg="../../../../../assets/quizGecko.jpg";
      indexBtn.classList.add("reptile");
      this.setCategory("Reptile");
      break;

      case "Amphibians": this.description = "Based on your answers, an amphibian would be the best selection for you! Amphibians are captivating and fun to watch, while also being somewhat low maintenance. Below are some species of amphibians that could be your future pet."; 
      this.animal1 = "Pacman Frog"; this.animal2 = "Fire Belly Newt"; this.animal3 = "African Bullfrog"; this.animal4 = "Tomato Frog";this.animalImg="../../../../../assets/quizFrog.jpg";
      indexBtn.classList.add("frog");
      this.setCategory("Frog");
      break;

      case "Small Animals": this.description = "Based on your answers, a small animal such as a hamster would be the best selection for you! Small animals includes most rodents and mammals under a certain height. Below are some species that could be your future pet."; 
      this.animal1 = "Gerbil"; this.animal2 = "Rabbit"; this.animal3 = "Robo Hamster"; this.animal4 = "Fancy Rat";this.animalImg="../../../../../assets/quizHamster.jpg";
      indexBtn.classList.add("small");
      this.setCategory("Small");
      break;

      case "Birds": this.description = "Based on your answers, a bird would be the best selection for you! Birds are intelligent and playful, with the proper care and conditions. A bird will not only be a pet, but a friend as well. Below are some species that could be your future pet."; 
      this.animal1 = "Budgie"; this.animal2 = "Finch"; this.animal3 = "Macaw"; this.animal4 = "Lorikeet";this.animalImg="../../../../../assets/quizParrot.jpg";
      indexBtn.classList.add("bird");
      this.setCategory("Bird");
      break;

      case "Aquatics": this.description = "Based on your answers, an aquatic animal would be the best selection for you. Fish are beautiful and entertaining to watch, while also being somewhat high. Tank maintenance is very important, read all about it in the index. Below are some species of aquatic animals that could be your future pet!"; 
      this.animal1 = "Beta Fish"; this.animal2 = "Zebra Danios"; this.animal3 = "Neon Tetra"; this.animal4 = "Oscar";this.animalImg="../../../../../assets/quizFish.jpg";
      indexBtn.classList.add("dog");
      this.setCategory("Aquatic");
      break;

    }
  }
  setCategory(string){
    this.iService.setCategory(string);
  }
  getAnimals(): void{
    this.iService.getAnimals();
  }
  setAnimalChoice(string){
    this.iService.setAnimalChoice(string);
    this.router.navigate(['animal-info']);
  }
 

}
