import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IFavorites } from '../interfaces/IFavorites';
import { ILogin } from '../interfaces/ILogin';
import { DataService } from './data.service';
import { IFavoritesID } from '../interfaces/IFavoritesID';
import {environment} from '../../environments/environment.prod'

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {
  private baseUrl: string = environment.URL;

  private favsUrl: string = "/animals/favs?email=";

  private addFavUrl: string = "/animals/favs/new";

  private deleteFavUrl: string = "/animals/favs/delete";

  // private favsUrl: string = "http://localhost:5000/animals/favs?email=";

  // private addFavUrl: string = "http://localhost:5000/animals/favs/new";

  // private deleteFavUrl: string = "http://localhost:5000/animals/favs/delete";

  constructor(private http: HttpClient) { }

  public favsArr;
  public favoritesBool: boolean = false;
  


  getFavorites(email){
    return this.http.get(this.baseUrl+this.favsUrl+email).subscribe((favsData) =>{
      this.favsArr = favsData;
    });
  }
  setFavBool(isFavs: boolean){
    this.favoritesBool = isFavs;
    // console.log(this.favoritesBool);
  }

  newFav(animal: IFavorites[]){
    // console.log(animal);
    this.http.post(this.baseUrl+this.addFavUrl,animal).subscribe();
  }
  removeFav(animal){
    // console.log(animal);
    this.http.delete(this.baseUrl+this.deleteFavUrl,animal).subscribe()
  }


}
