/*
10. Escreva um programa que se inicie com dois valores em duas constantes diferentes: o custo de um produto e seu valor de venda. A partir dos valores, calcule quanto de lucro (valor de venda descontado o custo do produto) a empresa terá ao vender mil desses produtos.
  - Atente que, sobre o custo do produto, incide um imposto de 20%.
  - Seu programa também deve emitir uma mensagem de erro e encerrar caso algum dos seus valores de entrada seja menor que zero.
  - O lucro de um produto é o resultado da subtração do valor de venda pelo custo do mesmo, sendo que o imposto de 20% também faz parte do valor de custo.
      - valorCustoTotal = valorCusto + impostoSobreOCusto
      - lucro = valorVenda - valorCustoTotal (lucro de um produto)
*/

// let x = 10*Math.random();
// let y = 100*Math.random();
// const valorCusto = x.toFixed(2);
// const valorVenda = y.toFixed(2);

const valorCusto = 10;
const valorVenda = 20;

let impostoSobreOCusto = valorCusto * 1.2;
let valorCustoTotal = impostoSobreOCusto;
let lucro = valorVenda - valorCustoTotal;


console.log("Valor do Custo: R$", valorCusto);
console.log("Valor de Venda: R$", valorVenda);
console.log("Valor de Custo + Imposto (20%): R$", impostoSobreOCusto);
console.log("Lucro por unidade: R$", lucro);
console.log("Lucro das mil unidades vendidas: R$", lucro*1000);
