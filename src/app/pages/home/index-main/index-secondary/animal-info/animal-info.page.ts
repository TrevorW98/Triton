import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { IAnimals } from 'src/app/interfaces/animals';
import { IFavorites } from 'src/app/interfaces/IFavorites';
import { IFavoritesID } from 'src/app/interfaces/IFavoritesID';
import { ILogin } from 'src/app/interfaces/ILogin';
import { DataService } from 'src/app/services/data.service';
import { FavoritesService } from 'src/app/services/favorites.service';
import { IndexService } from 'src/app/services/index.service';

@Component({
  selector: 'app-animal-info',
  templateUrl: './animal-info.page.html',
  styleUrls: ['./animal-info.page.scss'],
})

export class AnimalInfoPage implements OnInit {

  
  constructor(private iService: IndexService, private dService: DataService, private fService: FavoritesService) { 
    
  }
  animalChoice: IAnimals[];
  newFavorite: IFavorites[];
  removeFavorite: IFavoritesID[];
  favoriteBool: boolean;
  login: ILogin;

  ngOnInit() {
    // this.login = this.dService.getlogin();
    // console.log(this.login.Email);
    // this.favoriteBool = this.fService.favoritesBool;
    this.animalChoice = this.iService.animalArr.filter(b => {
      return b.breedSpeciesName == this.iService.animalChoice;
    })
    console.log(this.animalChoice);
  }
  // setFavorite(){
  //   if(!this.favoriteBool){
  //     console.log("add btn works");
  //     this.newFavorite = [{"email": this.dService.User.Email,
  //      "about": this.animalChoice[0].about,
  //      "breedSpeciesName": this.animalChoice[0].breedSpeciesName,
  //      "breedSpeciesPicture":this.animalChoice[0].breedSpeciesPicture,
  //      "careAndHabitat": this.animalChoice[0].careAndHabitat,
  //      "height": this.animalChoice[0].height,
  //      "weight": this.animalChoice[0].weight,
  //      "lifespan": this.animalChoice[0].lifespan,
  //      "diet": this.animalChoice[0].diet, 
  //      "category": this.animalChoice[0].category,
  //      "personality": this.animalChoice[0].personality,
  //      "dangerousFood": this.animalChoice[0].dangerousFood,
  //      "goodFood":this.animalChoice[0].goodFood,
  //      "groomingAndHealth":this.animalChoice[0].groomingAndHealth}]
  //      console.log(this.newFavorite);
  //    this.fService.newFav(this.newFavorite);
  //    this.favoriteBool = true;
  //   } 
  // }
  // deleteFavorite(){
  //   if(this.favoriteBool){
  //     console.log("delete btn works");
  //     this.removeFavorite = [{"email": this.dService.User.Email,
  //     "id":this.animalChoice[0].id,
  //      "about": this.animalChoice[0].about,
  //      "breedSpeciesName": this.animalChoice[0].breedSpeciesName,
  //      "breedSpeciesPicture":this.animalChoice[0].breedSpeciesPicture,
  //      "careAndHabitat": this.animalChoice[0].careAndHabitat,
  //      "height": this.animalChoice[0].height,
  //      "weight": this.animalChoice[0].weight,
  //      "lifespan": this.animalChoice[0].lifespan,
  //      "diet": this.animalChoice[0].diet, 
  //      "category": this.animalChoice[0].category,
  //      "personality": this.animalChoice[0].personality,
  //      "dangerousFood": this.animalChoice[0].dangerousFood,
  //      "goodFood":this.animalChoice[0].goodFood,
  //      "groomingAndHealth":this.animalChoice[0].groomingAndHealth}]
  //      console.log(this.removeFavorite);
  //      this.fService.removeFav(this.removeFavorite);
  //     this.favoriteBool = false;
  //   }
  // }
  

}
