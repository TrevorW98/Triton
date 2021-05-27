import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { IAnimals } from '../interfaces/animals';

@Injectable({
  providedIn: 'root'
})
export class IndexService {
  private animalUrl: string = "https://tritondatabasedeployment.azurewebsites.net/animals";

  constructor(private http: HttpClient) { }

  public animalArr: IAnimals[];
  public category;
 

  getAnimals(){
    return this.http.get(this.animalUrl).subscribe((animalData: IAnimals[]) =>{
      this.animalArr = animalData;
      console.log(this.animalArr);
    });
  }

  setCategory(category: string){
    this.category = category;
  }

}
