/*
Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
  - Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.
  - Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case) .
  - Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.
  - Exemplo: bishop (bispo) -> diagonals (diagonais)
*/

//const pecas = ["rei", "rainha", "bispo", "cavalo", "torre", "peão"];
//let indice = [Math.floor(Math.random() * pecas.length)];
//const descricao = pecas[indice];

let nomePeca="TOrre";
const descricao = nomePeca.toLowerCase();

switch(descricao){
  case "rei":
    console.log("O rei se move em todas as direções, uma casa por vez.");
    break;
  case "rainha":
    console.log("A rainha se move em todas as direções, sem limite de casas.");
    break;
  case "bispo":
    console.log("O bispo se move em diagonal, sem limite de casas.");
    break;
  case "cavalo":
    console.log("O cavalo se move em L e pode passar por cima das outras peças.");
    break;
  case "torre":
    console.log("A torre se move na vertical e na horizontal, sem limite de casas.");
    break;
  case "peão":
    console.log("O peão se move na vertical, uma casa por vez.");
    break; 
  default:
    console.log("Peça inválida.");
}
