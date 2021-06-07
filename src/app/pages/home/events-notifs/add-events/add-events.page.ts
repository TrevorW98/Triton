import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { IMyPets } from 'src/app/interfaces/IMyPets';
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

  ngOnInit() {
    this.dService.checkIfSignedIn();

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
