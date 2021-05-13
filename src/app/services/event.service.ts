import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { EVENTS } from './mock-events';
import { IEvent } from '../interfaces/event';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor() { }

  getEvents(): Observable<IEvent[]>{
    const events = of(EVENTS);
    return events;
  }
}
