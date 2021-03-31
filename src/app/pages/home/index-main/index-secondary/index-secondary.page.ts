import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';
import { Component, OnInit } from '@angular/core';
import { generate } from 'rxjs';
import { Button } from 'selenium-webdriver';

@Component({
  selector: 'app-index-secondary',
  templateUrl: './index-secondary.page.html',
  styleUrls: ['./index-secondary.page.scss'],
})
export class IndexSecondaryPage implements OnInit {
  // Call API for animal information Headers, we need animal bred/species in an array to then generate
  // components for each item in the listLazyRoutes. Need to generate a row and col for each ion-item containing a Button.
  constructor() { }

  ngOnInit() {
    //Would use this to cycle through array and create the necessary elements
    // for(let i = 0; i < animalNameArray.length; i++){
    //      let firstLetter = animalNameArray.length[i].split("")
    //       if(firstLetter[0].toLowerCase === "a"){
    //           document.createElement("ion-row");
    //            document.createElement("ion-col");
    //            document.createElement("ion-item-divider");
    //            document.createElement("ion-label");
    //            This would create the label for each Letter of the alphabet, as long as 
    //            there is an element in the array with that letter as it's first letter.
    //  }
    //    }
  }

}
