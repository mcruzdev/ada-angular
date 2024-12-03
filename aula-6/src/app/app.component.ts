import { Component, computed, inject } from "@angular/core";
import {
  Router,
  RouterLink,
  RouterLinkActive,
  RouterOutlet,
} from "@angular/router";
import { NgIconComponent, provideIcons } from "@ng-icons/core";
import { heroBellAlert } from "@ng-icons/heroicons/outline";
import { NotificadorService } from "./services/notificador.service";
import { AuthService } from "./services/auth/auth.service";
import { JsonPipe } from "@angular/common";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    NgIconComponent,
    JsonPipe,
  ],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss",
  viewProviders: [
    provideIcons({
      heroBellAlert,
    }),
  ],
})
export class AppComponent {
  title = "ada-angular";

  constructor(
    private readonly router: Router,
    private readonly notificadorService: NotificadorService
  ) {
    const userProfile = this.authService.googleUserProfile;
    console.log(
      userProfile.subscribe((response) => {
        console.log(response);
      })
    );
  }

  authService: AuthService = inject(AuthService);

  notificacoes = computed(() => this.notificadorService.notificacoes());

  profileImage = this.authService.identityClaims
    ? this.authService.identityClaims["picture"]
    : "";
  profileName = this.authService.identityClaims
    ? this.authService.identityClaims["name"]
    : "";

  claims = this.authService.identityClaims;

  navigate(path: string) {
    this.router.navigate([path]);
  }
}
