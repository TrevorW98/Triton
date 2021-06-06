import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IAnimals } from '../interfaces/animals';

@Injectable({
  providedIn: 'root'
})
export class IndexService {
  private animalUrl: string = "https://tritondatabasedeployment.azurewebsites.net/animals";

  constructor(private http: HttpClient) { }
   //LIVE
  // private baseUrl: string = "https://tritondatabasedeployment.azurewebsites.net";
  //DEV
  public data: any;
  private baseUrl: string = "http://localhost:5000";
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
    return this.http.get(this.animalUrl).subscribe((animalData: IAnimals[]) =>{
      this.animalArr = animalData;
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
    console.log("running");
    this.http.put(this.updateAnimalUrl,this.animalPhoto).subscribe(s => {
      console.log(s);
    })
  }

}
