import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IAnimals } from '../interfaces/animals';
import {environment} from '../../environments/environment.prod'
@Injectable({
  providedIn: 'root'
})
export class IndexService {
  

  constructor(private http: HttpClient) { }
   //LIVE
   private baseUrl: string = environment.URL;
  //DEV
  public data: any;
   //private baseUrl: string = "http://localhost:5000";
  private getInfo: string = "/animals";
  private updateAnimalUrl: string = this.baseUrl + '/animals/update';

  public animalArr: IAnimals[];
  public category;
  public animalChoice: string;

  public animalPhoto: IAnimals = {
    id: 0,
    breedSpeciesName: "",
    breedSpeciesPicture: "",
    height: "",
    weight: "",
    lifespan: "",
    diet: "",
    dangerousFood: "",
    goodFood: "",
    about: "",
    groomingAndHealth: "",
    careAndHabitat: "",
    personality: "",
    category: ""
  }

  getAnimals(){
    this.http.get(this.baseUrl+this.getInfo).subscribe((animalData: IAnimals[]) =>{
      this.animalArr = animalData;
      console.log(animalData);
      console.log(this.animalArr);
    });
  }

  setCategory(category: string){
    this.category = category;
  }

  setAnimalChoice(breedSpeciesName: string): void{
    this.animalPhoto.breedSpeciesName = breedSpeciesName;
    this.animalChoice = breedSpeciesName;
  }
  setBase64(string){
    this.animalPhoto.breedSpeciesPicture = string;
  }

  updateAnimal(){
    // console.log("running");
    this.http.put(this.updateAnimalUrl,this.animalPhoto).subscribe(s => {
      // console.log(s);
    })
  }

}
