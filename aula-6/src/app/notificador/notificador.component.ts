import { Component, inject, signal } from '@angular/core';

import { ToastrService } from 'ngx-toastr';
import { NotificadorService } from '../services/notificador.service';

@Component({
  selector: 'app-notificador',
  standalone: true,
  imports: [],
  templateUrl: './notificador.component.html',
  styleUrl: './notificador.component.scss'
})
export class NotificadorComponent {

  toastrService: ToastrService = inject(ToastrService);
  notificadorService: NotificadorService = inject(NotificadorService);
  
  notificar() {
    this.toastrService.success('+1', 'Nova notificação', {
      positionClass: 'toast-bottom-right',
      closeButton: true,
      progressBar: true
    });

    this.notificadorService.aumentarNotificacao();
  }
}
