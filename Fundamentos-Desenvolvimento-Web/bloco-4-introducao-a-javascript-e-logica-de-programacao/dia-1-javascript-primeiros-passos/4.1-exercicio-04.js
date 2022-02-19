/*
4. Faça um programa que, dado um valor definido numa constante, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário. 
*/

let parcial = Math.floor(Math.random() * (10-(-10)+1)) + (-10);
const a = parcial.toFixed(0);
console.log(a);
if(Math.sign(a)==1){
  console.log("O número é POSITIVO:",a);
}
else if(Math.sign(a)==-1){
  console.log("O número é NEGATIVO:",a);
}
else if(Math.sign(a)==+0 || Math.sign(a)==-0){
  console.log("ZERO");
}
else{
  console.log("Não é um número");
}
