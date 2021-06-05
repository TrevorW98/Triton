import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { EVENTS } from './mock-events';
import { IEvent } from '../interfaces/IEvent';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private http: HttpClient) { }
  private baseUrl: string = "http://localhost:5000";
  private eventEnd: string = '/events';

  getEvents(): Observable<IEvent[]>{
    const events = of(EVENTS);
    return events;
  }

  



}
