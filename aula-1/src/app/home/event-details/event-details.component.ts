import { Component, Input, OnInit } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";

@Component({
  selector: "app-event-details",
  standalone: true,
  imports: [],
  templateUrl: "./event-details.component.html",
  styleUrl: "./event-details.component.scss",
})
export class EventDetailsComponent implements OnInit {
  constructor(private readonly activatedRoute: ActivatedRoute) {}

  id: string = "";

  @Input()
  set eventId(id: string) {
    console.log(">>> receiving through @Input()", id);
    this.id = id;
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((p: Params) => {
      console.log(">>> receiving through ActivatedRoute", p["eventId"]);
      this.id = p["eventId"];
    });
  }
}
