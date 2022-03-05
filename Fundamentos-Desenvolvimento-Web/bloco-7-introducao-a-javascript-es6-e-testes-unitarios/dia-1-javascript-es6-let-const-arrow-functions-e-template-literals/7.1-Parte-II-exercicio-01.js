/*
 Abaixo, você verá algumas especificações de algoritmos para desenvolver. É fundamental que você utilize o que aprendeu sobre let , const , arrow functions , template literals e ternary operator .
  1. Crie uma função que receba um número e retorne seu fatorial.
    Na matemática, o fatorial de um número não negativo N , com a notação N! , é o produto de todos os inteiros menores ou iguais a N . Exemplo: 4! = 4 * 3 * 2 * 1 = 24.
    Bônus (opcional): tente fazer o mesmo exercício de forma recursiva . Spoiler: É possível resolver com uma linha usando ternary operator .
*/


const fatorial = (valor) => {
  let resultado = 1;
  for (let i = valor; i >= 1; i -= 1) {
    resultado *= i;
  }
  return resultado;
}
console.log(fatorial(7));


/*
  2. Crie uma função que receba uma frase e retorne qual a maior palavra.
*/

const maiorPalavra = (frase) => {
  const palavras = frase.split(' ');
  let maiorPalavra = '';
  for (let i = 0; i < palavras.length; i += 1) {
    maiorPalavra.length <= palavras[i].length ? maiorPalavra = palavras[i] : false;
  }
  return maiorPalavra;
}
console.log(maiorPalavra('Crie uma função que receba uma frase e retorne qual a maior palavra'));


/*
  3. Crie uma página que contenha:

    Um botão ao qual será associado um event listener ;
    Uma variável clickCount no arquivo JavaScript que acumule o número de clicks no botão;
    Um campo no HTML que vá atualizando a quantidade de clicks no botão conforme a variável clickCount é atualizada.
*/

// let botao = document.getElementById('botao');
// const clicks = (event) => {
 
// }
// botao.addEventListener('click', clicks);
// ##### Depois eu termino a questão 3 #####


/*
  4. Crie um código JavaScript com a seguinte especificação:
    Não se esqueça de usar template literals

  Função 1 : Escreva uma função que vai receber uma string como parâmetro. Sua função deverá procurar pela letra x em uma string qualquer que você determinar e substituir pela string que você passou como parâmetro. Sua função deve retornar essa nova string .
    Exemplo:
        String determinada: "Tryber x aqui!"
        Parâmetro: "Bebeto"
        Retorno: "Tryber Bebeto aqui!"
    Um array com escopo global, que é o escopo do arquivo JS , nesse caso, contendo cinco strings com suas principais skills .
*/

const substituirX = (string) => {
  let parametro = 'Bebeto';
  let resultado = string.replace(/x/gi, parametro); // "g" substitui N caracteres iguais. "i" ignora maiúsculo/minúsculo.
  return resultado;
}
console.log(substituirX('Tryber x aqui!'));

let global = ['HTML', 'CSS', 'JS', 'Xadrez', 'Lógica'];

/*
  Função 2 : Escreva uma função que vai receber a string retornada da Função 1 como parâmetro. Essa função deve concatenar as skills do array global à string que foi passada para a Função 2 via parâmetro. Você deve ordenar os skills em ordem alfabética. Sua função deve retornar essa nova string .
    Exemplo:
      "Tryber x aqui! Minhas cinco principais habilidades são:

      JavaScript;
      HTML; ... #goTrybe".
*/

const concatenar = (algo) => {
  let param = substituirX('Tryber x aqui!');
  let texto = `Minhas ${global.length} principais habilidades são:`
  let result = global.sort();
  return `${param} ${texto} ${result}`;
}
console.log(concatenar());
