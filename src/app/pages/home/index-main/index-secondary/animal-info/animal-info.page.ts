import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { IAnimals } from 'src/app/interfaces/animals';
import { IndexService } from 'src/app/services/index.service';

@Component({
  selector: 'app-animal-info',
  templateUrl: './animal-info.page.html',
  styleUrls: ['./animal-info.page.scss'],
})

export class AnimalInfoPage implements OnInit {

  
  constructor(private iService: IndexService) { 
    
  }
  animalChoice: IAnimals[];

  ngOnInit() {
    this.animalChoice = this.iService.animalArr.filter(b => {
      return b.breedSpeciesName == this.iService.animalChoice;
    })
    console.log(this.animalChoice);

  }
  

}
