import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-find-vet',
  templateUrl: './find-vet.page.html',
  styleUrls: ['./find-vet.page.scss'],
})
export class FindVetPage implements OnInit {
  backLocation = 'home';
  title = 'My Vet';

  constructor() { }

  ngOnInit() {
  }

}
