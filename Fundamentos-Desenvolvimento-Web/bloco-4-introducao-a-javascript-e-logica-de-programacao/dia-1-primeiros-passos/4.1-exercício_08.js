/*
8. Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for par. Caso contrário, ele retorna false .
  - Bonus: use somente um if .
*/

let x = 100*Math.random();
let y = 100*Math.random();
let z = 100*Math.random();
const a = parseInt(x);
const b = parseInt(y);
const c = parseInt(z);

console.log(a,b,c);

if(a%2==0 || b%2==0 ||c%2==0){

  console.log("deu certo.");
}
else{
  
  console.log("deu errado");
}