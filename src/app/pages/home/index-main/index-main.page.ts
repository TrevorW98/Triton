import { Component, OnInit } from '@angular/core';
import { IAnimals } from 'src/app/interfaces/animals';
import { ILogin } from 'src/app/interfaces/ILogin';
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

  CurrentUser: string;
    

  
  constructor(private dService: DataService, private iService: IndexService,  private fService: FavoritesService) { }
  
  public category;
  

  ngOnInit() {
    this.CurrentUser = this.dService.getUser();
    this.getAnimals();
    this.getFavorites(this.CurrentUser);
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


