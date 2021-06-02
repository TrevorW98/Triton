import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IFavorites } from '../interfaces/IFavorites';
import { ILogin } from '../interfaces/ILogin';
import { DataService } from './data.service';


@Injectable({
  providedIn: 'root'
})
export class FavoritesService {

  private favsUrl: string = "https://tritondatabasedeployment.azurewebsites.net/animals/favs";

  // private favsUrl: string = "http://localhost:5000/animals/favs";

  constructor(private http: HttpClient) { }

  public favsArr: IFavorites[];
  public favoritesBool: boolean = false;
  


  getFavorites(){
    return this.http.get(this.favsUrl).subscribe((favsData: IFavorites[]) =>{
      this.favsArr = favsData;
      console.log(this.favsArr);
    });
  }
  setFavBool(){
    this.favoritesBool = true;
  }


}
