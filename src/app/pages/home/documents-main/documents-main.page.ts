import { Component, OnInit } from '@angular/core';
import { DocumentsService } from 'src/app/services/documents.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';
import { IMyPets } from 'src/app/interfaces/IMyPets';
import { MypetsService } from 'src/app/services/mypets.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-documents-main',
  templateUrl: './documents-main.page.html',
  styleUrls: ['./documents-main.page.scss'],
})
export class DocumentsMainPage implements OnInit {
  backLocation = 'home';
  title = 'Documents';
 

  constructor(
    private formBuilder: FormBuilder,
    private docService: DocumentsService,
    private dService: DataService,
    private petsService: MypetsService,
    private router: Router) { }
    public myPets: IMyPets[] = [];
  
  ngOnInit() {
  }
  ionViewWillEnter():void {
    this.myPets = this.petsService.myPets;
  }
  setPetName(petName: string){
    this.docService.setPetChoice(petName);
   
      this.router.navigate(['/individual-pet-docs'])
    
  }

}
