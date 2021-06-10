import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { IMyPets } from 'src/app/interfaces/IMyPets';
import { MypetsService } from 'src/app/services/mypets.service';
import { MyPetsPage } from '../my-pets.page';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { IUser } from 'src/app/interfaces/IUser';

@Component({
  selector: 'app-pet-info',
  templateUrl: './pet-info.page.html',
  styleUrls: ['./pet-info.page.scss'],
})
export class PetInfoPage implements OnInit {
  backLocation = 'my-pets';
  title = 'My Pets';

  id = 0;
  BoxColor = 'dailyNeeds';
  inputOn: boolean = false;
  inputBox = '';
  addInfo: FormGroup;

  constructor(
    private petsService: MypetsService,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private dService: DataService,


  ) { }

  chosenPet?: IMyPets;
  // chosenPet: IMyPets;
  currentDetail: string[] = [];
  Petid: number;
  // Gotta pull daily needs in the ngOnInIt (right away when we get to this page so we need the pet name info)
  AddPetInfo: FormGroup;
  public myPets: IMyPets = {
    id: 0,
    petName: '',
    userId: 0,
    petDescription: '',
    petPicture: '',
    events: '',
    dailyNeeds: '',
    foodTreats: '',
    medical: '',
  }
  public login: IUser = {
    id: 0,
    email: '',
    profilePicture: '',
    staySignedIn: false,
    name: ''
  };


  ngOnInit() {
    // this.chosenPet = ( this.pService.myPets.filter((s)=> {
    //   return s.petName == this.pService.chosenPet;
    // }));
    //  this.chosenPet = this.pService.myPets.filter(pet => pet.petName == this.pService.chosenPet)[0];
    //  console.log(this.chosenPet);
    //  I have a long list of my pets. I wanna filter it to only pets whos name is equal to this chosen pet's name from pet service. THEN we do index of 0 to chose the first one of the list
    // console.log(this.pService.chosenPet);
    // this.id = this.chosenPet.id;
    this.login = this.dService.User;
    this.AddPetInfo = this.formBuilder.group({
      pDesc: new FormControl('', Validators.required),
    })
  }

  ionViewWillEnter(): void {

    const id = Number(this.route.snapshot.paramMap.get('id'));
    // this.petsService.getPet(id)
    //   .subscribe((pet: IMyPets) => this.chosenPet = pet);
    this.chosenPet = this.petsService.myPets.find( p => p.id == id);
    
    this.Petid = id;
    this.currentDetail = this.chosenPet.dailyNeeds.split("|").filter(detail => detail != '');
  }

  editMe() {
    this.inputOn = true;

  }
  submitForm() {
    // alert("successfully added");
    if (this.AddPetInfo.invalid) {
      alert('Fix errors on form');
    } else {
      alert('Succesful!');
      //   // console.log(this.AddPetForm.value);
      //   this.myPets.petName = this.AddPetForm.controls['pName'].value;
      //   this.myPets.petDescription = this.AddPetForm.controls['pInfo'].value;
      console.log(this.BoxColor);
      console.log("dailyNeeds: ", this.chosenPet.dailyNeeds);
      if (this.BoxColor == 'dailyNeeds') {
        this.currentDetail.unshift(this.AddPetInfo.controls['pDesc'].value);
        this.chosenPet.dailyNeeds = this.AddPetInfo.controls['pDesc'].value + "|" + this.chosenPet.dailyNeeds;
        // this.myPets.dailyNeeds = this.AddPetInfo.controls['pDesc'].value + "|" + this.myPets.dailyNeeds;
        console.log(this.myPets, this.login.id);
        // this.myPets.userId = this.login.id;
        // this.myPets.id = this.Petid;
        console.log(this.myPets);
        this.Update('dailyNeeds');
      } else if (this.BoxColor == 'food') {
        this.currentDetail.unshift(this.AddPetInfo.controls['pDesc'].value);
        this.chosenPet.foodTreats = this.AddPetInfo.controls['pDesc'].value + "|" + this.chosenPet.foodTreats;
        // this.myPets.foodTreats = this.AddPetInfo.controls['pDesc'].value + "|" + this.myPets.foodTreats;
        console.log(this.myPets, this.login.id);
        // this.myPets.userId = this.login.id;
        // this.myPets.id = this.Petid;
        console.log(this.myPets);
        this.Update('food');
      } else if (this.BoxColor == 'medical') {
        this.currentDetail.unshift(this.AddPetInfo.controls['pDesc'].value);
        this.chosenPet.medical = this.AddPetInfo.controls['pDesc'].value + "|" + this.chosenPet.medical;
        // this.myPets.medical = this.AddPetInfo.controls['pDesc'].value + "|" + this.myPets.medical;
        console.log(this.myPets, this.login.id);
        // this.myPets.userId = this.login.id;
        // this.myPets.id = this.Petid;
        console.log(this.myPets);
        this.Update('medical');
      }
      // this.Update(this.BoxColor);
      this.AddPetInfo.reset();
    }
  }

  Update(color) {
    if(color == 'dailyNeeds'){
      this.petsService.updateDailyNeed(this.chosenPet).subscribe()
    }else if(color == 'food'){
      this.petsService.updateFood(this.chosenPet).subscribe()
    }else if(color == 'medical'){
      this.petsService.updateMedical(this.chosenPet).subscribe()
    }

  }
  // Update(color) {
  //   if(color == 'dailyNeeds'){
  //     this.petsService.updateDailyNeed(this.myPets).subscribe((res: any) => {
  //       console.log(res)
  //     })
  //   }else if(color == 'food'){
      
  //   }else if(color == 'medical'){

  //   }
  // }


  // this will change the color and insert all the information from the pull into the box in one function.
  colorChange(card, color) {
    this.BoxColor = '';
    this.BoxColor = color;
    // console.log(this.BoxColor);
    // this first if else group will remove all the former backgrounds so it won't stack on top of each other.
    if (card.el.classList.contains('primaryBg')) {
      card.el.classList.remove('primaryBg');
    } else if (card.el.classList.contains('accentBg')) {
      card.el.classList.remove('accentBg');
    } else if (card.el.classList.contains('warnBg')) {
      card.el.classList.remove('warnBg');
    }


    if (color == 'dailyNeeds') {
      card.el.classList.add('primaryBg');
      this.currentDetail = this.chosenPet.dailyNeeds.split("|").filter(detail => detail != '');
      console.log(this.currentDetail)



    } else if (color == 'food') {
      card.el.classList.add('accentBg');
      this.currentDetail = this.chosenPet.foodTreats.split("|").filter(detail => detail != '');


    } else if (color == 'medical') {
      card.el.classList.add('warnBg');
      this.currentDetail = this.chosenPet.medical.split("|").filter(detail => detail != '');


    }
  }



}
