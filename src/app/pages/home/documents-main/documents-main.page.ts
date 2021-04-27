import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-documents-main',
  templateUrl: './documents-main.page.html',
  styleUrls: ['./documents-main.page.scss'],
})
export class DocumentsMainPage implements OnInit {
  backLocation = 'home';
  title = 'Documents';

  constructor() { }

  ngOnInit() {
  }
  petName = ['Nala', 'Yoda'];

}
