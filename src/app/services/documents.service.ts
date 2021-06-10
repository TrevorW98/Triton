import { Injectable } from '@angular/core';
import { IDocs } from '../interfaces/IDocs';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class DocumentsService {

  constructor(private http: HttpClient, private dService: DataService) { }
  private baseUrl: string = "https://tritondatabasedeployment.azurewebsites.net";
  // private baseUrl: string = "http://localhost:5000";
  private addDoc: string = "/documents/new";
  private getAllDocs: string = "/documents?email=";
  private getAllDocsPetname: string = "/documents?petName=";
  public chosenPet: string;

  public DocArrEmail: IDocs[];
  public DocArrPets: IDocs[];
  public document: IDocs = {
    petName: "",
    email: "",
    document: "",
    docName: ""
  }

  
  getDocsEmail(){
   this.http.get(this.baseUrl+this.getAllDocs+this.dService.User.email).subscribe((response: IDocs[]) =>{
      this.DocArrEmail = response;
      // console.log(this.DocArrEmail);
    });
  }
  getDocsPet(){
    this.http.get(this.baseUrl+this.getAllDocsPetname+this.document.petName).subscribe((response: IDocs[]) =>{
      this.DocArrPets = response;
    })
  }
  setPetChoice(petName: string): void{
    this.chosenPet = petName;
    this.document.petName = petName;
    this.document.email = this.dService.User.email;
  }
  setDocument(string){
    this.document.document = string;
  }
  addDocument(){
    return this.http.post(this.baseUrl+this.addDoc, this.document).toPromise();
  }
  setName(string){
    this.document.docName = string;
  }
}
