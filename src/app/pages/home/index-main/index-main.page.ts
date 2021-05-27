import { Component, OnInit } from '@angular/core';
import { Ilogin } from 'src/app/interfaces/ilogin';
import { DataService } from 'src/app/services/data.service';


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

  constructor(private dService: DataService) { }

  ngOnInit() {
    this.SignedInUser = this.dService.getloginOBJ();
  }

}
