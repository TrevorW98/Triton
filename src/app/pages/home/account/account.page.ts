import { Component, DoCheck, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { ImageService } from 'src/app/services/image.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements DoCheck {
  backLocation = 'home';
  title = 'Account';

  constructor(private imageConverter: ImageService,
              public dService: DataService) { }

  imgSrc;

  ngDoCheck() {
    if (this.dService.User.profilePicture != ''){
      console.log(this.dService.User.profilePicture);
      this.imgSrc = this.dService.User.profilePicture;
      console.log(this.imgSrc);

    }
  }

  onFileSelected(event) {

    let file: File = event.target.files[0];

    if(file){
      this.imageConverter.convertToString(file)
      .then(str => {
        this.imgSrc = str;
        this.updateProfile(str);
      });
    }

  }

  updateProfile(imageString: string) {
    this.dService.User.profilePicture = imageString;
    this.dService.updateUser();
  }

}
