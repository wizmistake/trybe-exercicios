/*

  1. Crie um irmão para elementoOndeVoceEsta .
  2. Crie um filho para elementoOndeVoceEsta .
  3. Crie um filho para primeiroFilhoDoFilho .
  4. A partir desse filho criado, acesse terceiroFilho .

*/

// Questão 1 - ok
let elementoPai = document.getElementById('pai');
let irmao = document.createElement('section');
irmao.innerText = 'Irmao do elementoOndeVoceEsta';
elementoPai.appendChild(irmao);


// Questão 2 - ok
let voce = document.getElementById('elementoOndeVoceEsta');
let voceFilho = document.createElement('section');
voceFilho.innerText = 'Filho do elementoOndeVoceEsta';
voce.appendChild(voceFilho);


// Questão 3 - ok
let filhoOndeVc = document.getElementById('primeiroFilhoDoFilho');
let filhoFilhoOndeVc = document.createElement('section');
filhoFilhoOndeVc.innerText = 'Filho do primeiroFilhoDoFilho';
filhoOndeVc.appendChild(filhoFilhoOndeVc); 


console.log(elementoPai);