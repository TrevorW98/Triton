import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { IMyPets } from 'src/app/interfaces/IMyPets';
import { DataService } from 'src/app/services/data.service';
import { MypetsService } from 'src/app/services/mypets.service';


@Component({
  selector: 'app-add-pet',
  templateUrl: './add-pet.page.html',
  styleUrls: ['./add-pet.page.scss'],
})
export class AddPetPage implements OnInit {
  backLocation = 'my-pets';
  title = 'Add Pets';

  constructor(private formBuilder: FormBuilder, private router: Router, private pService:MypetsService, private dService: DataService) { }
  AddPetForm: FormGroup;


  ngOnInit() {
    this.AddPetForm = this.formBuilder.group({
      pName: new FormControl('', Validators.required),
      pInfo: new FormControl(''),
      pPic: new FormControl('')
    })
  }
  public myPets: IMyPets = {    
    id: 0,
    petName: '',
    userId: 4,
    petDescription: '',
    petPicture: '',
    events: '',
    dailyNeeds: '',
    foodTreats: '',
    medical: '',
  }


  submitForm() {
    if (this.AddPetForm.invalid) {
      alert('Fix errors on form');
    } else {
      alert('Succesful!');
      // console.log(this.AddPetForm.value);
      this.myPets.petName = this.AddPetForm.controls['pName'].value;
      this.myPets.petDescription = this.AddPetForm.controls['pInfo'].value;
      this.myPets.petPicture = this.AddPetForm.controls['pPic'].value;
      console.log(this.myPets);
      // this.myPets.userId = this.AddPetForm.controls[]
      this.addPet();
      this.AddPetForm.reset();
    }
  }

  removePetProfile() {

  }

  // Here we are going to add a pet by pushing into the db
  // We will push picture, name, and description into the db here.
  addPet() {
    this.pService.addMyPets(this.myPets).then((res:any)=>{
      console.log(res);
    })
  }


}
