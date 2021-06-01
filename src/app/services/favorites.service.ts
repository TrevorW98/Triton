import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IFavorites } from '../interfaces/IFavorites';
import { ILogin } from '../interfaces/ILogin';
import { DataService } from './data.service';


@Injectable({
  providedIn: 'root'
})
export class FavoritesService {

  // private favsUrl: string = "https://tritondatabasedeployment.azurewebsites.net/animals/favs?email=";

  private favsUrl: string = "http://localhost:5000/animals/favs?email=";

  constructor(private http: HttpClient) { }

  public favsArr;
  public favoritesBool: boolean = false;
  


  getFavorites(email){
    return this.http.get(this.favsUrl,email).subscribe((favsData) =>{
      this.favsArr = favsData;
      console.log(this.favsArr);
    });
  }
  setFavBool(){
    this.favoritesBool = true;
  }


}
