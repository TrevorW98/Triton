import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { IUser } from 'src/app/interfaces/IUser';
import { DataService } from 'src/app/services/data.service';
import { ImageService } from 'src/app/services/image.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {
  
  constructor(private imageConverter: ImageService,
    public dService: DataService,
    private formBuilder: FormBuilder) { }


  backLocation = 'home';
  title = 'Account';
  imgSrc;
  addNameForm: FormGroup;
  
  public User: IUser = {
    id: 0,
    email: '',
    profilePicture: '',
    staySignedIn: false,
    name: ''
  };
  newName: string = "";


  ngOnInit() {
    this.addNameForm = this.formBuilder.group({
      nameInput: new FormControl(''),
    })
  }


  ionViewWillEnter() {
    if (this.dService.User.profilePicture != '') {
      // console.log(this.dService.User.profilePicture);
      this.imgSrc = this.dService.User.profilePicture;
      // console.log(this.imgSrc);

    }
  }

  onFileSelected(event) {

    let file: File = event.target.files[0];

    if (file) {
      this.imageConverter.convertToString(file)
        .then(str => {
          this.imgSrc = str;
          this.updateProfilePic(str);
        });
    }

  }

  updateProfilePic(imageString: string) {
    this.dService.User.profilePicture = imageString;
    this.dService.updateUser();
  }
  submit() {
    console.log("submitted name");
    console.log(this.addNameForm.controls['nameInput'].value);
    this.dService.User.name = this.addNameForm.controls['nameInput'].value;
    console.log(this.dService.User.name);
    this.dService.updateUser();
    this.addNameForm.reset();
  }
  signOut() {
    localStorage.setItem('savedUser',"");
    this.dService.setUser(this.User);
  }

}
