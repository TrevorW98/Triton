import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-feeding',
  templateUrl: './add-feeding.page.html',
  styleUrls: ['./add-feeding.page.scss'],
})
export class AddFeedingPage implements OnInit {
  backLocation = 'feeding-times';
  title= 'Feeding Time';
  repeat = ['Daily', 'Yearly', 'Monthly', 'Hourly', 'Never'];
  pets = ["Nala", "Simba", "Tauni", "Triton"];
  constructor() { }

  ngOnInit() {
  }

}
