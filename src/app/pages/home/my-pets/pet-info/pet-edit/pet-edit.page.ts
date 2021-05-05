import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pet-edit',
  templateUrl: './pet-edit.page.html',
  styleUrls: ['./pet-edit.page.scss'],
})
export class PetEditPage implements OnInit {
  backLocation = 'my-pets';
  title = 'My Pets';

  constructor() { }

  ngOnInit() {
  }
  removePetProfile(){
    
  }

}
