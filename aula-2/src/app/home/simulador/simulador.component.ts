import {
  Component,
  computed,
  effect,
  OnDestroy,
  Signal,
  signal,
  untracked,
  WritableSignal,
} from "@angular/core";
import { NgIconComponent, provideIcons } from "@ng-icons/core";
import { heroArrowTrendingUp } from "@ng-icons/heroicons/outline";

@Component({
  selector: "app-simulador",
  standalone: true,
  imports: [NgIconComponent],
  templateUrl: "./simulador.component.html",
  styleUrl: "./simulador.component.scss",
  viewProviders: [provideIcons({ heroArrowTrendingUp })],
})
export class SimuladorComponent implements OnDestroy {
  evento: Evento = {
    nome: "TDC",
    custo: 100.0,
    preco: 199.0,
  };

  constructor() {}

  effectRef = effect((onCleanup) => {
    console.log(`Novo valor da quantidade ${this.quantidade()}`);

    onCleanup(() => {
      console.log(`Limpando...`);
    });
  });

  ngOnDestroy(): void {
    this.effectRef.destroy();
  }

  quantidade: WritableSignal<number> = signal(0); //caixinha, wrapper

  lucro: Signal<number> = computed(() => {
    console.log("Executando pela primeira vez");
    return this.quantidade() * this.evento.preco - this.evento.custo;
  });

  inc() {
    const quantidadeAtual: number = this.quantidade();
    this.quantidade.set(quantidadeAtual + 1);
  }

  dim() {
    this.quantidade.update((quantidadeAtual) => {
      return quantidadeAtual - 1;
    });
  }
}

interface Evento {
  nome: string;
  custo: number;
  preco: number;
}
