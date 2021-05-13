import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vet-info',
  templateUrl: './vet-info.page.html',
  styleUrls: ['./vet-info.page.scss'],
})
export class VetInfoPage implements OnInit {
  backLocation = 'find-vet';
  title = 'My Vet';
  myMainVet = "Please Choose Vet";
  vetAddress = "1234 Hammer Lane Stockton, Ca 95210";
  vetHours = "Unavailable";
  constructor() { }

  ngOnInit() {
  }



}
