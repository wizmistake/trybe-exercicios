/*
4. Um número primo é aquele divisível apenas por 1 e por ele mesmo. Sabendo disso, escreva um algoritmo que retorne o maior número primo entre 0 e 50.
*/


let primos = [];
let divisor;
let maiorPrimo;

for (let i = 0; i <= 50; i += 1) {
  divisor = 2;
  for (let n = 1; n <= i; n += 1) {
    if (i % n !== 0) {
      divisor += 1;
    }
    if (i === divisor && n !== divisor) { // (n !== divisor) para retirar as duplicatas do array. Pois existem momentos em que 'n', 'i' e 'divisor' tem o mesmo valor. 
      primos.push(i);
      maiorPrimo = i;
    }
    // console.log('i',i);
    // console.log('n',n);
    // console.log('div',divisor);
  }
}
console.log(primos);
console.log('o maior número primo é:',maiorPrimo);
