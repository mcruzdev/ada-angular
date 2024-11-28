import { JsonPipe } from "@angular/common";
import { Component, inject } from "@angular/core";
import { RouterLink, RouterOutlet } from "@angular/router";
import { AuthService } from "../services/auth/auth.service";

@Component({
  selector: "app-home",
  standalone: true,
  imports: [RouterOutlet, RouterLink, JsonPipe],
  templateUrl: "./home.component.html",
  styleUrl: "./home.component.scss",
})
export class HomeComponent {
  oauth2 = inject(AuthService);

  picture: string = this.oauth2.identityClaims["picture"];
}
