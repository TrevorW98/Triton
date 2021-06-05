import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from './data.service';
import { IMyPets } from '../interfaces/IMyPets';

@Injectable({
  providedIn: 'root'
})
export class MypetsService {

  constructor(private http: HttpClient) { }

  private baseUrl: string = "http://localhost:5000";
  private myPetsAddition: string = "/pets?userid=";
  public myPets: IMyPets[];
  public chosenPet: string;


  getMyPets(id){
    return this.http.get(this.baseUrl+this.myPetsAddition+id);
  }

  setPetChoice(petName: string): void{
    this.chosenPet = petName;
  }


  setPetArr(pets: IMyPets[]){
    this.myPets = pets;
  }

}
