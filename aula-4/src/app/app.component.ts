import { Component, computed, signal } from '@angular/core';
import {
  Router,
  RouterLink,
  RouterLinkActive,
  RouterOutlet,
} from '@angular/router';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { heroBellAlert } from '@ng-icons/heroicons/outline'
import { NotificadorService } from './services/notificador.service';
import { LocalStorageService } from './services/local-storage.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, NgIconComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  viewProviders: [provideIcons({
    heroBellAlert
  })]
})
export class AppComponent {
  title = 'ada-angular';

  constructor(private readonly router: Router, private readonly notificadorService: NotificadorService) { }

  notificacoes = computed(() => this.notificadorService.notificacoes())

  // notificacoes = signal(0)

  navigate(path: string) {
    this.router.navigate([path]);
  }
}
