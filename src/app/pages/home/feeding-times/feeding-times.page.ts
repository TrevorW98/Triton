import { Component, OnInit } from '@angular/core';
import { IEvent } from 'src/app/interfaces/IEvent';
import { EventService } from 'src/app/services/event.service';
import { MypetsService } from 'src/app/services/mypets.service';

@Component({
  selector: 'app-feeding-times',
  templateUrl: './feeding-times.page.html',
  styleUrls: ['./feeding-times.page.scss'],
})
export class FeedingTimesPage implements OnInit {
  backLocation = 'home';
  title = 'Feeding Time';

  feedingTimes: IEvent[] = [];
  pets = {};

  constructor(
    private eventsService: EventService,
    private petsService: MypetsService
    ) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.eventsService.getEvents().subscribe(events =>
      this.feedingTimes = events.filter(e => e.eventType.toLowerCase() == 'feeding'));
    this.petsService.myPets.forEach(pet => {
      this.pets[pet.id.toString()] = pet.petName; 
    });
  }

}
