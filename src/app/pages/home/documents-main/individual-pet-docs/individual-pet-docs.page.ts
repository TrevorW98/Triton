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
  
  ngOnInit() {
    this.docService.getDocs();
    setTimeout(()=>{
      this.docArr = this.docService.DocArr;
      console.log(this.docArr);
    }, 1000);
    this.AddDoc = this.formBuilder.group({
      petName: new FormControl('', Validators.required)
    })
  }
  submit(){
    if (this.AddDoc.invalid) {
      alert('Fix errors on form');
    } else {
      alert('Succesful!');
      this.docService.setOtherParams(this.AddDoc.controls['petName'].value, this.dService.User.email);
    }
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
        //file is now encoded
        this.docService.setBase64(convertBase64);
      };
      reader.readAsDataURL(file);
    }
  }
}
