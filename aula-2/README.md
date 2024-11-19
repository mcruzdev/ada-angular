# Aula 2

## Reativo

Podemos ver no código a seguir que:

```ts
let a = 10;
let b = 20;
let z = a + b;
console.log(z); // 30

a = 20;

console.log(z); // 30

z = a + b;
console.log(z); // 40
```

`z` não reage às mudanças de `a`, esse código não é um código reativo.

## Simulador imperativo e não reativo

```ts
quantidade: number = 0
lucro: number = 0

inc() {
  this.quantidade = this.quantidade + 1
  this.calcularCusto()
}

dim() {
  this.quantidade = this.quantidade - 1
  this.calcularCusto()
}

calcularCusto() {
  const atual = this.quantidade * this.evento.preco
  this.lucro = atual - this.evento.custo;
}
```

## Simulador declarativo, reativo e usando rxjs

```ts
constructor() {
  this.quantidadeSubject.asObservable().subscribe((novoValor) => {
    console.log('>>>', novoValor)
  });

}

private quantidadeSubject = new BehaviorSubject(0);

quantidade$ = this.quantidadeSubject.asObservable();

lucro$ = this.quantidadeSubject.pipe(
  map((novaQuantidade) => { 
  return (novaQuantidade * this.evento.preco) - this.evento.custo;
}))

inc() {
  const valorAtual = this.quantidadeSubject.getValue();
  this.quantidadeSubject.next(valorAtual + 1);
}

dim() {
  const valorAtual = this.quantidadeSubject.getValue();
  this.quantidadeSubject.next(valorAtual - 1);
}

```
Devemos lembrar que quando retornamos um `Observable` para o nosso template, devemos utilizar o `AsyncPipe`. Por exemplo:


```html
{{ quantidade$ | async }}
```

O dólar como sufixo é uma convenção do Angular.