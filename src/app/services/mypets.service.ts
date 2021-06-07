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
  private update: string = '/pets/update';
  
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
    // console.log()
    return this.dService.post(this.add, addPets).toPromise();

  }

  updatePet(chosenPet: IMyPets) {
    this.myPets.splice(this.myPets.indexOf(this.myPets.find(p => p.id == chosenPet.id)), 1, chosenPet);
    this.http.put(this.baseUrl + this.update, chosenPet)
    .subscribe(response => console.log(response));
  }



// Update: My Pets Info




}
