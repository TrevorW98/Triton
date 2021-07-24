import { Component, Input, OnInit } from '@angular/core';
import { IEvent } from 'src/app/interfaces/IEvent';
import { MypetsService } from 'src/app/services/mypets.service';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss'],
})
export class EventComponent implements OnInit {

  @Input() event?: IEvent;
  @Input() petName?;

  constructor(private petsService: MypetsService) { }

  ngOnInit() {
  }

}
