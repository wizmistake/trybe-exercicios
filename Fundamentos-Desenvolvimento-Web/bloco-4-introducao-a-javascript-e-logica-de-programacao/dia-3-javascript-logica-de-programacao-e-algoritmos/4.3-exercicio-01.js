/*
1. O fatorial é a multiplicação de um número natural pelos seus antecessores, exceto o zero. Por exemplo:
  - O fatorial é representado pelo sinal "!"
  4! = 4 x 3 x 2 x 1 = 24
Com base nessas informações, crie um algoritmo que retorne o fatorial de 10.
*/


let numero = Math.floor(Math.random() * 10);
//let numero = 10;
let fatorial = 1;

for(n=numero; n>=1; n-=1){
  fatorial = fatorial * n;
}
console.log("O fatorial de", numero+"!\nÉ =", fatorial);
