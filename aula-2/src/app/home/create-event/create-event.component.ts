import { Component, computed, effect, OnDestroy, Signal, signal, untracked, WritableSignal } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { heroArrowTrendingUp } from '@ng-icons/heroicons/outline';


@Component({
  selector: 'app-create-event',
  standalone: true,
  imports: [NgIconComponent],
  templateUrl: './create-event.component.html',
  styleUrl: './create-event.component.scss',
  viewProviders: [provideIcons(
    {heroArrowTrendingUp}
  )]
})
export class CreateEventComponent implements OnDestroy {
  evento: Evento = {
    nome: 'TDC',
    custo: 100.00,
    preco: 199.00
  }


  constructor() {
  }

  effectRef = effect((onCleanup) => {
    console.log(`Novo valor da quantidade ${this.quantidade()}`)

    onCleanup(() => {
      console.log(`...`)
    })
  })

  ngOnDestroy(): void {
    this.effectRef.destroy()
  }

  quantidade: WritableSignal<number> = signal(0) //caixinha, wrapper

  // lucro... depends 
  lucro: Signal<number> = computed(() => { // quando eu preciso derivar de um signal existente
    console.log('primeira vez')
    return (untracked<number>(this.quantidade) * this.evento.preco) - this.evento.custo;
  });

  inc() {
    const quantidadeAtual: number = this.quantidade()
    this.quantidade.set(quantidadeAtual + 1)
  }
 
  dim() {
    this.quantidade.update( (quantidadeAtual) => {
      return quantidadeAtual - 1;
    })
  }

}

interface Evento {
  nome: string
  custo: number
  preco: number
}


// let a = 10
// let b = 20
// let z = a + b
// console.log(z) // 30

// a = 20
// z = a + b

// console.log(z) // 


// 1. usando imperativa e nao usando reativo
// quantidade: number = 0
// lucro: number = 0

// inc() {
//   this.quantidade = this.quantidade + 1
//   this.calcularCusto()
// }

// dim() {
//   this.quantidade = this.quantidade - 1
//   this.calcularCusto()
// }

// calcularCusto() {
//   const atual = this.quantidade * this.evento.preco
//   this.lucro = atual - this.evento.custo;
// }



// 2. reativa e usando rxjs declarativo

// constructor() {
//   this.quantidadeSubject.asObservable().subscribe((novoValor) => {
//     console.log('>>>', novoValor)
//   });
  
// }

// private quantidadeSubject = new BehaviorSubject(0);

// quantidade$ = this.quantidadeSubject.asObservable();

// lucro$ = this.quantidadeSubject.pipe( // eu vou realizar algumas operacoes 
//   map((novaQuantidade) => { // operador map do rxjs (lib reativa)
//   return (novaQuantidade * this.evento.preco) - this.evento.custo;
// }))

// inc() {
//   const valorAtual = this.quantidadeSubject.getValue();
//   this.quantidadeSubject.next(valorAtual + 1);

//   // this.quantidade = this.quantidade + 1;
// }

// dim() {
//   const valorAtual = this.quantidadeSubject.getValue();
//   this.quantidadeSubject.next(valorAtual - 1);
// }