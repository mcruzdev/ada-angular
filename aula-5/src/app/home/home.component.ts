import { Component, inject, signal } from "@angular/core";
import { RouterLink, RouterOutlet } from "@angular/router";
import { AuthService } from "../services/auth/auth.service";
import { JsonPipe } from "@angular/common";

@Component({
  selector: "app-home",
  standalone: true,
  imports: [RouterOutlet, RouterLink, JsonPipe],
  templateUrl: "./home.component.html",
  styleUrl: "./home.component.scss",
})
export class HomeComponent {
  oauth2 = inject(AuthService);

  profileImage = this.oauth2.identityClaims["picture"];
  profileName = this.oauth2.identityClaims["name"];
}
