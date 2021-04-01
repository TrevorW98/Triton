import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-animal-info',
  templateUrl: './animal-info.page.html',
  styleUrls: ['./animal-info.page.scss'],
})

export class AnimalInfoPage implements OnInit {

  
  constructor() { 
    
  }
  
  ngOnInit() {
  }
  favoriteBtn(){
    //This function will handle adding this breed/species of animal to an array of favorites,
    // or updating the table of animals with a column called favorites with a boolean. If true, 
    //Load these items in the favorites tab of the Index
    console.log(document.getElementById("breedSpecies").innerText);
    console.log(document.getElementById("favorite").className = ("selected"))
    //this.temporaryFavoritesArr.push(this.breedSpecies)
  }

}
