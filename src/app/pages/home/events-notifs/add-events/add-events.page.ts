import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { IMyPets } from 'src/app/interfaces/IMyPets';
import { IUser } from 'src/app/interfaces/IUser';
import { DataService } from 'src/app/services/data.service';
import { EventService } from 'src/app/services/event.service';
import { MypetsService } from 'src/app/services/mypets.service';

@Component({
  selector: 'app-add-events',
  templateUrl: './add-events.page.html',
  styleUrls: ['./add-events.page.scss'],
})
export class AddEventsPage implements OnInit {
  backLocation = 'events-notifs';
  title= 'Events';
  repeat = ['Daily', 'Yearly', 'Monthly', 'Hourly', 'Never'];
  constructor(private dService: DataService, public pService: MypetsService, private eService: EventService, private formBuilder: FormBuilder) { }

  AddEventForm: FormGroup;
  public login: IUser = {
    id: 0,
    email: '',
    profilePicture: '',
    staySignedIn: false,
    name: ''
  };
  // pet name, event, date, time, repeat?
  ngOnInit() {
    this.dService.checkIfSignedIn();
    this.login = this.dService.User;
    this.AddEventForm = this.formBuilder.group({
      pName: new FormControl('', Validators.required),
      event: new FormControl('', Validators.required),
      date: new FormControl('', Validators.required),
      occur: new FormControl('', Validators.required)
    })
  }
  submitForm(){
    if (this.AddEventForm.invalid) {
      alert('Fix errors on form');
    } else {
      alert('Succesful!');
      // // console.log(this.AddPetForm.value);
      // this.myPets.petName = this.AddPetForm.controls['pName'].value;
      // this.myPets.petDescription = this.AddPetForm.controls['pInfo'].value;
      // this.myPets.petPicture = this.AddPetForm.controls['pPic'].value;
      // console.log(this.myPets, this.login.id);
      // this.myPets.userId = this.login.id;
      // this.addPet();
      // this.AddPetForm.reset();
    }
  }
  ionViewWillEnter(): void {
      this.pService.getMyPets(this.dService.User.id)
    .subscribe((pets: IMyPets[]) => {
      // console.log(pets);
      this.pService.myPets = pets;
      console.log(this.pService.myPets);
    });
    // this.getEvents();
  }

}
