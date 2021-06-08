import { Component, OnInit } from '@angular/core';
import { DocumentsService } from 'src/app/services/documents.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';
import { IDocs } from 'src/app/interfaces/IDocs';

@Component({
  selector: 'app-individual-pet-docs',
  templateUrl: './individual-pet-docs.page.html',
  styleUrls: ['./individual-pet-docs.page.scss'],
})
export class IndividualPetDocsPage implements OnInit {
  backLocation = '/documents-main';
  title = 'Documents'

  constructor(
    private formBuilder: FormBuilder,
    private docService: DocumentsService,
    private dService: DataService) { }
  AddDoc: FormGroup;
  docArr: IDocs[];
  email: string;
  document: string;
  submit: boolean = false;
  petName: string;
  
  ngOnInit() {
    this.petName = this.docService.chosenPet;
    this.email = this.dService.User.email;
    this.docArr = this.docService.DocArrEmail.filter(a => {
      return a.petName == this.petName;
    });
    console.log(this.docArr);
  }
  onFileSelected(event): void {
    const file: File = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        // Store base64 encoded representation of file
        let result = reader.result.toString();
        result = result.substring(result.indexOf(',') + 1);
        const convertBase64 = btoa(result);
        console.log(convertBase64);
        //file is now encoded
        this.docService.setDocument(convertBase64);
        this.submit = true;
      };
      reader.readAsDataURL(file);
    }
  }
  addDocument(){
    this.docService.addDocument().then((res:any)=>{
      console.log(res);
    });
  }
}
