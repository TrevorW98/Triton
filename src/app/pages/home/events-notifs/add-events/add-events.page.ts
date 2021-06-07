import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { IEvent } from 'src/app/interfaces/IEvent';
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

  public event: IEvent = {
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
    staySignedIn: false,
    name: ''
  };
  // pet name, event, date, time, repeat?
  ngOnInit() {
    this.login = this.dService.User;
    // console.log(this.login);
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
      // console.log(this.AddEventForm.value);
      this.event.petname = this.AddEventForm.controls['pName'].value;
      this.event.eventType = this.AddEventForm.controls['event'].value;
      this.event.date = this.AddEventForm.controls['date'].value;
      this.event.occurance = this.AddEventForm.controls['occur'].value;
      this.event.UserId = this.login.id;
      // console.log(this.event);
      this.addEvent();
      this.AddEventForm.reset();
    }
  }

  ionViewWillEnter(): void {
      this.pService.getMyPets(this.dService.User.id)
    .subscribe((pets: IMyPets[]) => {
      // console.log(pets);
      this.pService.myPets = pets;
      // console.log(this.pService.myPets);
    });
    // this.getEvents();
  }
  addEvent() {
    this.eService.addEvents(this.event).then((res:any)=>{
      console.log(res);
    })
  }
}
