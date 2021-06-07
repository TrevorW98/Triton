import { Injectable } from '@angular/core';
import { IDocs } from '../interfaces/IDocs';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DocumentsService {

  constructor(private http: HttpClient) { }
  private baseUrl: string = "http://localhost:5000";
  private addDoc: string = "/documents/new";
  private getbyPet: string = "/documents?petName=";
  public chosenPet: string;

  public DocArr: IDocs[];
  public document: IDocs = {
    petname: "",
    email: "",
    document: ""
  }

  getDocs(){
    this.http.get(this.baseUrl+this.getbyPet+this.document.petname).subscribe((response: IDocs[]) =>{
      this.DocArr = response;
    });
  }
  setPetChoice(petName: string): void{
    this.chosenPet = petName;
  }
  

  setBase64(string){
    this.document.document = string;
  }

  setOtherParams(pet, email){
    this.document.petname = pet;
    this.document.email = email;
  }

  addDocument(item: IDocs){
    this.http.post(this.baseUrl+this.addDoc, item).toPromise();
  }
}
