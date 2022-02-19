/*
2. Crie um algoritmo que conte quantos números do intervalo entre 2 e 150 são divisíveis por 3.
Caso a quantidade seja igual a 50, exiba uma mensagem secreta.
*/

let x = 0;
for (let n = 2; n <= 150; n += 1) {
  if (n % 3 == 0) {
    x += 1;
  }
}
if (x == 50) {
  console.log("Mensagem secreta:",x);
} else {
  console.log("Mensagem NÃO secreta kkkk");
}
