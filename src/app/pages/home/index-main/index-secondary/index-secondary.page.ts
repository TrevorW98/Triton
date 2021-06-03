import { Component, OnInit } from '@angular/core';
import { IAnimals } from 'src/app/interfaces/animals';
import { IndexService } from 'src/app/services/index.service';
import { DataService } from 'src/app/services/data.service';
import { ILogin } from 'src/app/interfaces/ILogin';
import { IFavorites } from 'src/app/interfaces/IFavorites';
import { FavoritesService } from 'src/app/services/favorites.service';

@Component({
  selector: 'app-index-secondary',
  templateUrl: './index-secondary.page.html',
  styleUrls: ['./index-secondary.page.scss'],
})
export class IndexSecondaryPage implements OnInit {
  // Call API for animal information buttons, we need animal breed/species in an array to then generate
  // components for each item in the array. Need to generate a row and col for each ion-item containing a Button.
  // And also an item divider and label for each letter of the alphabet that is represented in the array
  constructor(private iService: IndexService, private dService: DataService, private fService: FavoritesService) { }

  public animals: IAnimals[];
  public favorites: IFavorites[];

  Title: string = "";
  
  public animalChoice: string = "";
  favoritesBool: boolean = false;

  SignedInUser: ILogin = {
    Email: '',
    Password: ''
  };


  ngOnInit() {
    // this.favoritesBool = this.fService.favoritesBool;
    // this.SignedInUser = this.dService.getlogin();
    this.animals = this.iService.animalArr.filter(a => {
      return a.category == this.iService.category;
    });
    // this.favorites = this.fService.favsArr;
    console.log(this.animals);
    // console.log(this.favorites);
    this.setTitle();
  }
  
  
  setTitle(){
    if(!this.favoritesBool){
      switch(this.iService.category){
        case "Dog": this.Title = "Dogs"; break;
        case "Cat": this.Title = "Cats"; break;
        case "Reptile": this.Title = "Reptiles"; break;
        case "Bird": this.Title = "Birds"; break;
        case "Amphibian": this.Title = "Amphibians"; break;
        case "Small": this.Title = "Small Animals"; break;
        case "Insect": this.Title = "Insects"; break;
        case "Aquatic": this.Title = "Aquatic Animals"; break;
      }
    } else{
      this.Title = "Favorites";
    }
      let categoryTitle = document.getElementById("categoryTitle");
      categoryTitle.innerText = this.Title;
  }

  setAnimalChoice(name: string){
    this.iService.setAnimalChoice(name);
  }
 

  


}
