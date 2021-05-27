import { Component, OnInit } from '@angular/core';
import { IAnimals } from 'src/app/interfaces/animals';
import { Ilogin } from 'src/app/interfaces/ilogin';
import { DataService } from 'src/app/services/data.service';
import { IndexService } from 'src/app/services/index.service';


@Component({
  selector: 'app-index-main',
  templateUrl: './index-main.page.html',
  styleUrls: ['./index-main.page.scss'],
})
export class IndexMainPage implements OnInit {
  backLocation = 'home';
  title = 'Pet Index';

  SignedInUser: Ilogin = {
    Email: '',
    Password: ''
  };

  
  constructor(private dService: DataService, private iService: IndexService) { }
  
  category;
  

  ngOnInit() {
    this.SignedInUser = this.dService.getloginOBJ();
    this.getAnimals();
  }

  

  dogs(){
    this.category = "dog";
  }
  getCategory(){
    return this.category;
  }
  
  getAnimals(): void{
    this.iService.getAnimals();
  }
  setCategoryIndexMain(string){
    this.iService.setCategory(string);
  }
 
  
  
}


