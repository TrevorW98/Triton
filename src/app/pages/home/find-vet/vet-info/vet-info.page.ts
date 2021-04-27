import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vet-info',
  templateUrl: './vet-info.page.html',
  styleUrls: ['./vet-info.page.scss'],
})
export class VetInfoPage implements OnInit {
  backLocation = 'find-vet';
  title = 'My Vet';

  constructor() { }

  ngOnInit() {
  }

}
