import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Event } from '../home/list-events/event';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  baseUrl: string = 'http://localhost:3000' // base url da minha API

  constructor(private readonly httpClient: HttpClient) { }

  getEvents(): Observable<Event[]> {
    return this.httpClient.get<Event[]>(`${this.baseUrl}/events`)
  }

  // public get events() : string {
  //   return ""
  // }


}


