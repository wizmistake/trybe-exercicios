/*
2. Faça um programa que retorne o maior de dois números. Defina no começo do programa duas constantes com os valores que serão comparados.
*/

let x = 100*Math.random();
let y = 100*Math.random();
const a = parseInt(x);
const b = parseInt(y);

console.log(a,b);

if(a>b){
  console.log("O número:",a,"é MAIOR que o número:",b);
}
else if(b>a){
  console.log("O número:",b,"é MAIOR que o número:",a);
}
else{
  console.log("Ambos os valores, são iguais.");
}