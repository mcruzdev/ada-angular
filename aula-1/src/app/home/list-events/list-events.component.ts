import { CommonModule, NgFor } from "@angular/common";
import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";

@Component({
  selector: "app-list-events",
  standalone: true,
  imports: [NgFor, RouterLink],
  templateUrl: "./list-events.component.html",
  styleUrl: "./list-events.component.scss",
})
export class ListEventsComponent {
  events = [
    {
      id: 1,
      name: "JUG Vale #22",
      description: "A great event from JUG Vale org",
    },
    {
      id: 2,
      name: "TDC 2024",
      description: "A great event from TDC org",
    },
    {
      id: 3,
      name: "ADA Together",
      description: "A great event from ADA Together at ADA office",
    },
  ];
}
