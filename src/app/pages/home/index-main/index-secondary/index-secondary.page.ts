import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';
import { Component, OnInit } from '@angular/core';
import { DomController } from '@ionic/angular';
import { generate } from 'rxjs';
import { Button } from 'selenium-webdriver';
import { IAnimals } from 'src/app/interfaces/animals';
import { IndexService } from 'src/app/services/index.service';


@Component({
  selector: 'app-index-secondary',
  templateUrl: './index-secondary.page.html',
  styleUrls: ['./index-secondary.page.scss'],
})
export class IndexSecondaryPage implements OnInit {
  // Call API for animal information buttons, we need animal breed/species in an array to then generate
  // components for each item in the array. Need to generate a row and col for each ion-item containing a Button.
  // And also an item divider and label for each letter of the alphabet that is represented in the array
  constructor(private iService: IndexService) { }

  animals: IAnimals[];

  ngOnInit() {
    this.animals = this.iService.animalArr.filter(a => {
      return a.category == this.iService.category;
    });
    console.log(this.animals);
    for(let i = 0; i < this.animals.length; i++){
      console.log(this.animals[i].breedSpeciesName);
      let button = document.createElement('ion-button');
      let item = document.createElement('ion-item');
      let col = document.createElement('ion-col');
      let row = document.createElement('ion-row');
      let matButtonAtt = document.createAttribute("mat-button");
      button.innerText = this.animals[i].breedSpeciesName;
      button.setAttribute("mat-button", "");
      button.classList.add("animalBtns")

    }
   
  }

}
