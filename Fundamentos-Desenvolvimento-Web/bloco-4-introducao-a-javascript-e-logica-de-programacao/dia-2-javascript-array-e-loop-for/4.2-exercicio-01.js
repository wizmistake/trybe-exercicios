/*
  Aprofunde seus conhecimentos.
  Leia atentamente os enunciados e faça o que se pede! Iremos utilizar esse array para realizar os exercícios do 1 ao 7:
    let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
  
  1. Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log() ;

  2. Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;

  3. Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;
      A média aritmética é o resultado da soma de todos os elementos divido pelo número total de elementos.

  4. Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";

  5. Utilizando for, descubra qual o maior valor contido no array e imprima-o;
  
  6. Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";
  
  7. Utilizando for , descubra qual o menor valor contido no array e imprima-o;
  
  8. Utilizando for , crie um array que vá de 1 até 25 e imprima o resultado;
  
  9. Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2 .
*/

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let valor of numbers) {
  console.log(valor);
}
// Questão 01 - ok

let soma = 0;
for (let sum of numbers) {
  soma += sum; 
}
console.log('A soma de todos os valores do array "numbers" é:', soma);
// Questão 02 - ok

let mediaAritmetica = (soma / numbers.length); // Vou utilizar a a variável "soma", pois ela já contém a soma de todos os elementos do array "numbers".
console.log('A média aritmética do array "numbers" é:',mediaAritmetica);
// Questão 03 - ok

if (mediaAritmetica > 20) {
  console.log('Valor maior que 20');
} else {
  console.log('Valor menor OU igual a 20');
}
// Questão 04 - ok

let maior = 0;
for (let comparador of numbers) {
  if (comparador >= maior) {
    maior = comparador;
  }
}
console.log('O maior valor do array "numbers" é:', maior);
// Questão 05 - ok

let quantosImpar = 0;
for (let impar of numbers) {
  if (impar % 2 != 0) {
    console.log('Valor ímpar:',impar);
    quantosImpar += 1;
  }
}
if (quantosImpar === 0) {
  console.log('Nenhum valor ímpar encontrado.');
} else {
  console.log('Existem', quantosImpar, 'números ímpares dentro do array "numbers"');
}
// Questão 06 - ok

