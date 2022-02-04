/*
3. Faça um programa que retorne o maior de três números. Defina no começo do programa três constantes com os valores que serão comparados. 
*/

let x = 100*Math.random();
let y = 100*Math.random();
let z = 100*Math.random();
const a = parseInt(x);
const b = parseInt(y);
const c = parseInt(z);

console.log(a, b, c);

if(a>b && a>c){
  console.log("O número:",a,"é MAIOR que os números:",b,"e", c);
}
else if(b>a && b>c){
  console.log("O número:",b,"é MAIOR que os números:",a,"e", c);
}
else if(c>a && c>b){
  console.log("O número:",c,"é MAIOR que os números:",a,"e", b);
}
// caso dois valores sejam iguais.
else if(a==b && a>c){
  console.log("O número:",a,"é MAIOR que o número:",c);
}
else if(b==c && b>a){
  console.log("O número:",b,"é MAIOR que o número:",a);
}
else if(c==a && c>b){
  console.log("O número:",c,"é MAIOR que o números",b);
}
else{
  console.log("Os valores são iguais.");
}