import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pet-info',
  templateUrl: './pet-info.page.html',
  styleUrls: ['./pet-info.page.scss'],
})
export class PetInfoPage implements OnInit {

  constructor() { }

  // Gotta pull daily needs in the ngOnInIt (right away when we get to this page so we need the pet name info)
  ngOnInit() {
  }
  // this will change the color and insert all the information from the pull into the box in one function.
  
  colorChange(card, color){
    // this first if else group will remove all the former backgrounds so it won't stack on top of each other.
    if(card.el.classList.contains('primaryBg')){
      card.el.classList.remove('primaryBg');
    }else if(card.el.classList.contains('accentBg')){
      card.el.classList.remove('accentBg');
    }else if(card.el.classList.contains('warnBg')){
      card.el.classList.remove('warnBg');
    }


    if(color == 'dailyNeeds'){
      card.el.classList.add('primaryBg');



    }else if(color == 'food'){
      card.el.classList.add('accentBg');
    
    
    
    }else if(color == 'medical'){
      card.el.classList.add('warnBg');
    
    
    
    
    }
  }

  // dailyNeeds(card){
  //   if(card.el.classList.contains('primaryBg')){
  //     card.el.classList.remove('primaryBg');
  //   }else if(card.el.classList.contains('accentBg')){
  //     card.el.classList.remove('accentBg');
  //   }else if(card.el.classList.contains('warnBg')){
  //     card.el.classList.remove('warnBg');
  //   }
  //   card.el.classList.add("primaryBg")
  // }

  // food(card){
  //   if(card.el.classList.contains('primaryBg')){
  //     card.el.classList.remove('primaryBg');
  //   }else if(card.el.classList.contains('accentBg')){
  //     card.el.classList.remove('accentBg');
  //   }else if(card.el.classList.contains('warnBg')){
  //     card.el.classList.remove('warnBg');
  //   }
  //   card.el.classList.add("accentBg")
  // }

  // medicalDox(card){
  //   if(card.el.classList.contains('primaryBg')){
  //     card.el.classList.remove('primaryBg');
  //   }else if(card.el.classList.contains('accentBg')){
  //     card.el.classList.remove('accentBg');
  //   }else if(card.el.classList.contains('warnBg')){
  //     card.el.classList.remove('warnBg');
  //   }
  //   card.el.classList.add("warnBg")
  // }
  

}
