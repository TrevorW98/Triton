import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from './data.service';
import { IMyPets } from '../interfaces/IMyPets';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MypetsService {
  
  constructor(private http: HttpClient, private dService: DataService) { }
  
  private baseUrl: string = "http://localhost:5000";
  private myPetsAddition: string = "/pets?userid=";
  public myPets: IMyPets[] = [];
  private add: string = '/pets/add';
  
  public chosenPet: string;
  // public addUserPet: IMyPets[];
  
  getMyPets(id){
    return this.http.get(this.baseUrl+this.myPetsAddition+id);
  }
  
  setPetChoice(petName: string): void{
    this.chosenPet = petName;
  }
  
  
  setPetArr(pets: IMyPets[]){
    this.myPets = pets;
  }
  
  getPet(id: number): Observable<IMyPets> {
    let pet = this.myPets.find(p => p.id == id);
    return of(pet);
  }

// Post: Add pets

  addMyPets(addPets: IMyPets){
    // return this.dService.post(this.add, addPets).toPromise();
  }



// Update: My Pets Info




}
