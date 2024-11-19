# Aula 2


Podemos ver no código a seguir que:
```ts
let a = 10
let b = 20
let z = a + b
console.log(z) // 30

a = 20

console.log(z) // 30

z = a + b
console.log(z) // 40

```

`z` não reage às mudanças de `a`, esse código não é um código reativo.