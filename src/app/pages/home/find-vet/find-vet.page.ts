import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-find-vet',
  templateUrl: './find-vet.page.html',
  styleUrls: ['./find-vet.page.scss'],
})
export class FindVetPage implements OnInit {
  backLocation = 'home';
  title = 'My Vet';
  vetHospital = "Random Vet Hospital";
  address = "123 Hammer Ln"
  phone = "20912345567";
  hours = "Mon-Fri 8-5PM"
  constructor() { }

  ngOnInit() {
  }

}
