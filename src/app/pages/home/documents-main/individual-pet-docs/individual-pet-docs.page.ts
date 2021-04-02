import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-individual-pet-docs',
  templateUrl: './individual-pet-docs.page.html',
  styleUrls: ['./individual-pet-docs.page.scss'],
})
export class IndividualPetDocsPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  petDoxType = ["Vaccination Records", "Medicine", "Last Visit Info"]
  
  deleteMe(item){
    // remove item from petDoxType
  }
}
