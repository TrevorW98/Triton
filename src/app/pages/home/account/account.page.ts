import { Component, OnInit } from '@angular/core';
import { ImageService } from 'src/app/services/image.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {
  backLocation = 'home';
  title = 'Account';

  constructor(private imageConverter: ImageService) { }

  imgSrc;

  ngOnInit() { }

  onFileSelected(event) {

    let file: File = event.target.files[0];

    if(file){
      this.imageConverter.convertToString(file).then(str => this.imgSrc = str);
    }

  }

}
