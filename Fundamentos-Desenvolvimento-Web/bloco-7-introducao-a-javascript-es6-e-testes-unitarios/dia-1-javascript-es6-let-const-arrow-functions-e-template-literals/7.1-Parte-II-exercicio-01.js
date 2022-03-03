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
