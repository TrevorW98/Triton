import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-pet',
  templateUrl: './add-pet.page.html',
  styleUrls: ['./add-pet.page.scss'],
})
export class AddPetPage implements OnInit {
  backLocation = 'my-pets';
  title = 'Add Pets';
  petName = '';
  petInfo = '';
  petPic = '';


  constructor() { }

  ngOnInit() {
  }
  removePetProfile(){
    
  }

  // Here we are going to add a pet by pushing into the db
  // We will push picture, name, and description into the db here.
  addPet(){

  }
}
