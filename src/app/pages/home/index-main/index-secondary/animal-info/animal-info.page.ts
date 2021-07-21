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

  backLocation = 'index-secondary';
  title = 'Pet Index';
  
  constructor(private iService: IndexService, private dService: DataService, private fService: FavoritesService) { 
    
  }
  animalChoice: IAnimals[];
  newFavorite: IFavorites[];
  removeFavorite: IFavoritesID[];
  favoriteBool: boolean;
  login: ILogin;
  src: string;

  ngOnInit() {
    // this.login = this.dService.getlogin();
    // console.log(this.login.Email);
    // this.favoriteBool = this.fService.favoritesBool;
    this.animalChoice = this.iService.animalArr.filter(b => {
      return b.breedSpeciesName == this.iService.animalChoice;
    })
    // console.log(this.animalChoice);
    this.convertToImage();
  }
  convertToImage(){
    if(this.animalChoice[0].breedSpeciesPicture == '' || this.animalChoice[0].breedSpeciesPicture == "temp. string"){
      this.src = '../../../../../assets/sunset.jpg'
    } else{
      this.src = "data:image/jpeg;base64," + atob(this.animalChoice[0].breedSpeciesPicture);
    }
    // console.log(this.src); 
  }
  
  onFileSelected(event): void {

    const file: File = event.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        // Store base64 encoded representation of file
      
        let result = reader.result.toString();
        result = result.substring(result.indexOf(',') + 1);
       
        const convertBase64 = btoa(result);
        // console.log(convertBase64);
        //reconvert to image on the screen
        this.iService.setBase64(convertBase64);
        setTimeout(()=> {
          this.iService.updateAnimal();
        }, 2000)
      };
      reader.readAsDataURL(file);
    }
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
