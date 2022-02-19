/*
4. Desenvolva um algoritmo que verifica se a pessoa é maior ou menor de idade.
Imprima no console seguindo o exemplo: "A pessoa é maior de idade".
Bônus: Crie a condição utilizando operador ternário.
*/

let idade = Math.floor(Math.random() * (100-0+1));

if(idade<18){
  console.log("A pessoa é MENOR de idade, pois ela tem " +idade+ " anos");
}
else{
  console.log("A pessoa é MAIOR de idade, pois ela tem " +idade+ " anos");
}
