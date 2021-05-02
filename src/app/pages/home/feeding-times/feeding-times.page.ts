import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feeding-times',
  templateUrl: './feeding-times.page.html',
  styleUrls: ['./feeding-times.page.scss'],
})
export class FeedingTimesPage implements OnInit {
  backLocation = 'home';
  title = 'Feeding Times';

  constructor() { }

  ngOnInit() {
  }

}
