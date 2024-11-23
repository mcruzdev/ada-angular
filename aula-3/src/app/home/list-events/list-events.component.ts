import { CommonModule, NgFor } from "@angular/common";
import { Component, inject, OnInit } from "@angular/core";
import { RouterLink } from "@angular/router";
import { EventService } from "../../services/api-client.service";
import {Event, Events} from "./event"
import { toSignal } from "@angular/core/rxjs-interop";

@Component({
  selector: "app-list-events",
  standalone: true,
  imports: [RouterLink],
  templateUrl: "./list-events.component.html",
  styleUrl: "./list-events.component.scss",
})
export class ListEventsComponent implements OnInit {
  eventService = inject(EventService)
  events: Event[] = []

  evts = toSignal<Event[]>(this.eventService.getEvents())


  ngOnInit(): void {
    // this.eventService.getEvents() // Voce precisa se inscrever em um Observable pra pegar o valor
    // .subscribe((value: Event[]) => {
    //   this.events = value;
    // })
  }


  // events = [
  //   {
  //     id: 1,
  //     name: "JUG Vale #22",
  //     description: "A great event from JUG Vale org",
  //   },
  //   {
  //     id: 2,
  //     name: "TDC 2024",
  //     description: "A great event from TDC org",
  //   },
  //   {
  //     id: 3,
  //     name: "ADA Together",
  //     description: "A great event from ADA Together at ADA office",
  //   },
  // ];
}
