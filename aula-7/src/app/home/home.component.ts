import { Component } from "@angular/core";
import { RouterLink, RouterOutlet } from "@angular/router";
import { JsonPipe } from "@angular/common";

@Component({
  selector: "app-home",
  standalone: true,
  imports: [RouterOutlet, RouterLink, JsonPipe],
  templateUrl: "./home.component.html",
  styleUrl: "./home.component.scss",
})
export class HomeComponent {}
