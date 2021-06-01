import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { ImageService } from 'src/app/services/image.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {
  backLocation = 'home';
  title = 'Account';

  constructor(private imageConverter: ImageService,
              public dService: DataService) { }

  imgSrc;

  ngOnInit() {
    if (this.dService.User.ProfilePicture != ''){
      console.log(this.dService.User.ProfilePicture);
      this.imgSrc = this.dService.User.ProfilePicture;
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
    this.dService.User.ProfilePicture = imageString;
    this.dService.updateUser();
  }

}
