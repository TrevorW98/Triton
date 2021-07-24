import { Component, OnInit, Input } from '@angular/core';
import { IEvent } from 'src/app/interfaces/IEvent';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss'],
})
export class FeedComponent implements OnInit {

  @Input() event?: IEvent; 

  constructor() { }

  ngOnInit() {}

}
