import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { EVENTS } from './mock-events';
import { IEvent } from '../interfaces/IEvent';
import { HttpClient } from '@angular/common/http';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(
    private http: HttpClient,
    private dService: DataService
  ) { }
  private baseUrl: string = 'http://localhost:5000';

  private eventEnd: string = '/events?userId=';
  private add: string = '/events/add';
  public event:IEvent[];

  getEvents(): Observable<IEvent[]>{
    return this.http.get<IEvent[]>(this.baseUrl+this.eventEnd+this.dService.User.id);
  }

  getUserEvents(id){
  // getUserEvents(){
    // console.log(this.http.get(this.baseUrl+this.eventEnd+id));
    return this.http.get(this.baseUrl+this.eventEnd+id);
    // console.log(this.http.get(this.baseUrl+this.eventEnd));
    // return this.http.get(this.baseUrl+this.eventEnd);
  }
  addEvents(eventToAdd: IEvent){
    // console.log(this.http.post(this.baseUrl + this.add))
    // return this.http.post(this.baseUrl + this.add)
    return this.dService.post(this.add, eventToAdd).toPromise();
  }






}
