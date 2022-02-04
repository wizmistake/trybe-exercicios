/*
5. Faça um programa que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false , caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.
  - Para os ângulos serem de um triângulo válido, a soma dos três devem ser 180 graus.
  - Um ângulo será considerado inválido se não tiver um valor positivo.
*/

/*
let x = 100*Math.random();
let y = 100*Math.random();
let z = 100*Math.random();
const a = parseInt(x);
const b = parseInt(y);
const c = parseInt(z);
*/
const a = 10;
const b = 120;
const c = 50;
somaDosAngulos = a+b+c;
if(somaDosAngulos === 180){
  console.log("Angulos válidos:",a,b,c);
}
else{
  console.log("Ângulos Inválidos.");
}