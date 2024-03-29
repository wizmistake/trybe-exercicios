/*
  2. Copie o código abaixo e faça uma função que retorne o array oddsAndEvens em ordem crescente.

    Utilize template literals para que a chamada console.log(<seu código>oddsAndEvens<seu código>); retorne "Os números 2,3,4,7,10,13 se encontram ordenados de forma crescente!".
    Bônus (opcional): tente fazer o mesmo exercício utilizando o método array.sort() . Spoiler: É possível realizar uma função que ordene qualquer array de números.
*/


/*
      const oddsAndEvens = [13, 3, 4, 10, 7, 2];

      // Seu código aqui.

      console.log(oddsAndEvens); // será necessário alterar essa linha 😉
*/

const oddsAndEvens = [13, 3, 4, 10, 7, 2];
const comparar = (a, b) => a - b; // Referência: 'https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/sort'
oddsAndEvens.sort(comparar);
console.log(`Os números ${oddsAndEvens} se encontram ordenados de forma crescente!`);
