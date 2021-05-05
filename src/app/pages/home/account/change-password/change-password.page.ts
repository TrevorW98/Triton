import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.page.html',
  styleUrls: ['./change-password.page.scss'],
})
export class ChangePasswordPage implements OnInit {
  backLocation = 'account';
  title = 'Account';

  constructor() { }

  ngOnInit() {
  }

}
