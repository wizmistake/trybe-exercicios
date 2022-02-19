/*
1. Crie uma variável para armazenar o estado da pessoa candidata no processo seletivo, que pode ser: 'aprovada' , 'lista' ou 'reprovada' ;
2. Crie uma estrutura condicional com o switch/case que irá imprimir as mensagens do exercício anterior se o estado da pessoa candidata for 'aprovada' , 'lista' ou 'reprovada' . Como default , imprima a mensagem de 'não se aplica' .
*/

const estadoPessoa = ["aprovado", "reprovado", "lista"];

let indice = [Math.floor(Math.random() * estadoPessoa.length)];

const condicaoPessoa = estadoPessoa[indice];

console.log(condicaoPessoa);

switch(condicaoPessoa){
  case "aprovado":
    console.log("Parabéns, você foi aprovado(a)!");
    break;
  case "reprovado":
    console.log("Você foi reprovado(a)");
    break;
  case "lista":
    console.log("Você está na nossa lista de espera.");
    break;
  default:
    console.log("Não se aplica.");
}
