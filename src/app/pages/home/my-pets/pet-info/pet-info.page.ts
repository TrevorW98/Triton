import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { IMyPets } from 'src/app/interfaces/imypets';
import { MypetsService } from 'src/app/services/mypets.service';
import { MyPetsPage } from '../my-pets.page';

@Component({
  selector: 'app-pet-info',
  templateUrl: './pet-info.page.html',
  styleUrls: ['./pet-info.page.scss'],
})
export class PetInfoPage implements OnInit {
  backLocation = 'my-pets';
  title = 'My Pets';
  
  inputOn: boolean = false;
  inputBox = '';
  addInfo: FormGroup;
  constructor(private pService: MypetsService) { }

  chosenPet: IMyPets[];
  currentDetail: string;
  // Gotta pull daily needs in the ngOnInIt (right away when we get to this page so we need the pet name info)
  ngOnInit() {
   this.chosenPet = ( this.pService.myPets.filter((s)=> {
      return s.petName == this.pService.chosenPet;
    }));
  }
  // this will change the color and insert all the information from the pull into the box in one function.

  editMe() {
    this.inputOn = true;

  }
  submitForm(){
      alert("successfully added");
    
  }


  colorChange(card, color) {
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
      this.currentDetail = this.chosenPet[0].dailyNeeds;



    } else if (color == 'food') {
      card.el.classList.add('accentBg');
      this.currentDetail = this.chosenPet[0].foodTreats;


    } else if (color == 'medical') {
      card.el.classList.add('warnBg');
      this.currentDetail = this.chosenPet[0].medical;


    }
  }



}
