/*
01 - Lanchonete da Trybe.
A Trybe abriu uma lanchonete e precisa criar um menu de opções para que as pessoas consigam escolher qual lanche maravilhoso irão pedir. Para isso escreva um algoritmo que recebe o número da opção escolhida conforme tabela abaixo e retorne a string inteira do respectivo lanche:
"1 - Trybe Lanche Feliz"
"2 - McTrybe"
"3 - TrybeWooper"
"4 - X-Trybe"
"5 - Triplo Trybe com JS"
Caso a pessoa escolha uma opção que não existe na tabela acima, retorne:
"Não temos esta opção ainda."
Utilize Switch/Case para resolver este problema.
*/

let lanches = ["Não temos esta opção ainda.", "Trybe Lanche Feliz", "McTrybe", "TrybeWooper", "X-Trybe", "Triplo Trybe com JS"];

const readline = require("readline");
const resposta = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

resposta.question("Qual lanche voçê deseja?", function (answer){

  switch (resposta.question){
    case 1:
      console.log("O seu:",lanches[1]," será servido em instantes.");
      break;
    
    case 2:
      console.log("O seu:",lanches[2]," será servido em instantes.");
      break;

    case 3:
      console.log("O seu:",lanches[3]," será servido em instantes.");
      break;

    case 4:
      console.log("O seu:",lanches[4]," será servido em instantes.");
      break;

    case 5:
      console.log("O seu:",lanches[5]," será servido em instantes.");
      break;

    default:
      console.log(lanches[0]);
  }

  console.log("Obrigado por lanchar na Trybe, volte sempre!");

})