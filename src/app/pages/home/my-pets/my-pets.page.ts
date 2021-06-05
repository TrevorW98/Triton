import { Component, OnInit } from '@angular/core';
import { IMyPets } from 'src/app/interfaces/IMyPets';
import { IUser } from 'src/app/interfaces/IUser';
import { DataService } from 'src/app/services/data.service';
import { MypetsService } from 'src/app/services/mypets.service';

@Component({
  selector: 'app-my-pets',
  templateUrl: './my-pets.page.html',
  styleUrls: ['./my-pets.page.scss'],
})
export class MyPetsPage implements OnInit {
  backLocation: string = 'home';
  title: string = 'My Pets';
  
  constructor(private petsService: MypetsService, private dService: DataService) { }

  public login: IUser = {
    id: 0,
    email: '',
    profilePicture: '',
    StaySignedIn: false,
  }; 
  public myPets: IMyPets[] = [];
  
  ngOnInit() {
    // this.login = this.dService.User;
    // this.pService.getMyPets("4").subscribe((s: IMyPets[]) =>{
    //   console.log(s);
    //   this.myPets = s;
    //   this.pService.setPetArr(this.myPets);
    //   console.log(this.myPets);
    //   console.log(this.pService.myPets);
    // });
  }

  ionViewWillEnter():void {
    this.myPets = this.petsService.myPets;
  }
  // petName = ["Nala", "Tauni", "Triton", "Yoda", "Floofy McFloof Mc Floofer-Kins"];

  setPetName(petName: string){
    this.petsService.setPetChoice(petName);
  }









}
