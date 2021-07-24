import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IEvent } from '../interfaces/IEvent';
import { HttpClient } from '@angular/common/http';
import { DataService } from './data.service';
import {environment} from '../../environments/environment.prod'
@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(
    private http: HttpClient,
    private dService: DataService
  ) { }
  private baseUrl: string = environment.URL;
  // private baseUrl: string = 'http://localhost:5000';

  private eventEnd: string = '/events?userId=';
  private add: string = '/events/add';
  private delete: string = '/events/delete';
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

  deleteEvent(event: IEvent) {
    return  this.http.put( this.baseUrl+ this.delete, event);
  }

}
