import { Component, OnInit } from '@angular/core';
import { IMyPets } from 'src/app/interfaces/IMyPets';
import { DataService } from 'src/app/services/data.service';
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
  constructor(private dService: DataService, public pService: MypetsService) { }

  ngOnInit() {
    this.dService.checkIfSignedIn();

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
