import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { IEvent } from 'src/app/interfaces/IEvent';
import { IMyPets } from 'src/app/interfaces/IMyPets';
import { IUser } from 'src/app/interfaces/IUser';
import { DataService } from 'src/app/services/data.service';
import { EventService } from 'src/app/services/event.service';
import { MypetsService } from 'src/app/services/mypets.service';

@Component({
  selector: 'app-add-feeding',
  templateUrl: './add-feeding.page.html',
  styleUrls: ['./add-feeding.page.scss'],
})
export class AddFeedingPage implements OnInit {
  backLocation = 'feeding-times';
  title = 'Feeding Time';
  repeat = ['Daily', 'Yearly', 'Monthly', 'Hourly', 'Never'];
  pets = ["Nala", "Simba", "Tauni", "Triton"];
  AddEventForm: FormGroup;
  feed = "feeding";

  public event: IEvent = {
    id: 0,
    UserId: 0,
    petId: 0,
    date: '',
    occurance: '',
    eventType: '',
    petname: '',
  }
  public login: IUser = {
    id: 0,
    email: '',
    profilePicture: '',
    staySignedIn: false,
    name: ''
  };
  constructor(private formBuilder: FormBuilder, private dService: DataService, public pService: MypetsService, private eService: EventService) { }



  ngOnInit() {
    this.login = this.dService.User;
    console.log(this.login);
    this.AddEventForm = this.formBuilder.group({
      pName: new FormControl('', Validators.required),
      // event: new FormControl('', Validators.required),
      date: new FormControl('', Validators.required),
      occur: new FormControl('', Validators.required)
    })
  }
  submitForm() {
    if (this.AddEventForm.invalid) {
      alert('Fix errors on form');
    } else {
      alert('Succesful!');
      // console.log(this.AddEventForm.value);
      this.event.petname = this.AddEventForm.controls['pName'].value;
      this.event.eventType = this.feed;
      this.event.date = "2021-06-24T" + this.AddEventForm.controls['date'].value;
      // Trevor, this is ghetto rigged please change. Happy Birthday Hugo.
      this.event.occurance = this.AddEventForm.controls['occur'].value;
      this.event.UserId = this.login.id;

      this.event.petId = this.pService.myPets.find(p => p.petName == this.event.petname).id;

    }

    console.log(this.event);
    this.addEvent();
    this.AddEventForm.reset();
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
    this.eService.addEvents(this.event).then((res: any) => {
      console.log(res);
    })
  }


}
