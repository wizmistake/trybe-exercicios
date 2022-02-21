/*

  1. Crie um irmão para elementoOndeVoceEsta .
  2. Crie um filho para elementoOndeVoceEsta .
  3. Crie um filho para primeiroFilhoDoFilho .
  4. A partir desse filho criado, acesse terceiroFilho .

*/

// Questão 1 - ok
let elementoPai = document.getElementById('pai');
let irmao = document.createElement('section');
irmao.innerText = 'elementoIrmao';
elementoPai.appendChild(irmao);

console.log(elementoPai);