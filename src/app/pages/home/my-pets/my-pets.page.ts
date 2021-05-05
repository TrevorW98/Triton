import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-pets',
  templateUrl: './my-pets.page.html',
  styleUrls: ['./my-pets.page.scss'],
})
export class MyPetsPage implements OnInit {
  backLocation: string = 'home';
  title: string = 'My Pets';
  
  constructor() { }

  ngOnInit() {
  }
  petName = ["Nala", "Tauni", "Triton", "Yoda", "Floofy McFloof Mc Floofer-Kins"];








}
