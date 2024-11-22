import { effect, inject, Injectable, signal } from '@angular/core';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class NotificadorService {

  localStorageService = inject(LocalStorageService)

  notificacoes = signal(+this.localStorageService.get('notificacoes') || 0)

  effectRef = effect(() => {
    this.localStorageService.set('notificacoes', this.notificacoes().toString())
  });

  aumentarNotificacao() {
    this.notificacoes.update(function (valorAtual) {
      return valorAtual + 1
    })
  }
}
