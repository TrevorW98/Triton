import { Component, DoCheck, OnInit } from '@angular/core';
import { IAnimals } from 'src/app/interfaces/animals';
import { ILogin } from 'src/app/interfaces/ILogin';
import { IUser } from 'src/app/interfaces/IUser';
import { DataService } from 'src/app/services/data.service';
import { FavoritesService } from 'src/app/services/favorites.service';
import { IndexService } from 'src/app/services/index.service';


@Component({
  selector: 'app-index-main',
  templateUrl: './index-main.page.html',
  styleUrls: ['./index-main.page.scss'],
})
export class IndexMainPage implements OnInit {
  backLocation = 'home';
  title = 'Pet Index';

  public login: IUser = {
    Id: 0,
    email: '',
    profilePicture: '',
    StaySignedIn: false,
  };  

  
  constructor(private dService: DataService, private iService: IndexService,  private fService: FavoritesService) { }
  
  public category;
  

  ngOnInit() {
    this.login = this.dService.User;
    console.log(this.login.email);
    this.getAnimals();
    this.getFavorites(this.login.email);
    console.log(this.fService.favsArr);
    console.log()
  }
 
  getAnimals(): void{
    this.iService.getAnimals();
  }
  getFavorites(email: string): void{
    this.fService.getFavorites(email);
  }
  setFavBool(){
    this.fService.setFavBool();
  }
  setCategoryIndexMain(string){
    this.iService.setCategory(string);
  }
 
  
  
}


