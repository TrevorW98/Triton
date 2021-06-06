import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { IEvent } from 'src/app/interfaces/IEvent';
import { IMyPets } from 'src/app/interfaces/IMyPets';
import { IUser } from 'src/app/interfaces/IUser';
import { DataService } from 'src/app/services/data.service';
import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-add-events',
  templateUrl: './add-events.page.html',
  styleUrls: ['./add-events.page.scss'],
})
export class AddEventsPage implements OnInit {
  backLocation = 'events-notifs';
  title= 'Events';
  repeat = ['Daily', 'Yearly', 'Monthly', 'Hourly', 'Never'];
  pets = [];
  constructor(private formBuilder: FormBuilder, private eService: EventService, private dService: DataService) { }
  
  AddEventForm: FormGroup;


  public events: IEvent = {
    id: 0,
    UserId: 0,
    petname: '',
    date: '',
    occurance: '',
    eventType: '',
  }
  public login: IUser = {
    id: 0,
    email: '',
    profilePicture: '',
    StaySignedIn: false
  };
  public myPets: IMyPets = {
    id: 0,
    petName: '',
    userId: 0,
    petDescription: '',
    petPicture: '',
    events: '',
    dailyNeeds: '',
    foodTreats: '',
    medical: '',
  }

  ngOnInit() {



    this.login = this.dService.User;
    this.AddEventForm = this.formBuilder.group({
      petname: new FormControl('', Validators.required),
      date: new FormControl('', Validators.required),
      occurance: new FormControl(''),
      eventType: new FormControl('')
    })
  }

  
  submitForm() {
    if (this.AddEventForm.invalid) {
      alert('Fix errors on form');
    } else {
      alert('Succesful!');
      // console.log(this.AddEventForm.value);
      this.events.petname = this.AddEventForm.controls['pName'].value;
      this.events.eventType = this.AddEventForm.controls['pInfo'].value;
      this.events.occurance = this.AddEventForm.controls['pPic'].value;
      console.log(this.events, this.login.id);
      this.events.UserId = this.login.id;
      this.addPet();
      this.AddEventForm.reset();
    }
  }

  addPet() {
    this.eService.addEvents(this.events).then((res:any)=>{
      console.log(res);
    })
  }


}
