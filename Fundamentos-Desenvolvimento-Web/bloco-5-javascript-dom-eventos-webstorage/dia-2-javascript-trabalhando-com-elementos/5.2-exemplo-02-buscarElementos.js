/*

  1. Acesse o elemento elementoOndeVoceEsta .
  2. Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele.
  3. Acesse o primeiroFilhoDoFilho e adicione um texto a ele. Você se lembra dos vídeos da aula anterior, como fazer isso?
  4. Acesse o primeiroFilho a partir de pai .
  5. Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta .
  6. Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta .
  7. Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta .
  8. Agora acesse o terceiroFilho a partir de pai .

*/

// Questão 1 - ok
console.log('1.',document.getElementById("elementoOndeVoceEsta"));

// Questão 2 - ok
document.getElementById("elementoOndeVoceEsta").parentNode.style.color = 'red';
console.log('2.',document.getElementById('elementoOndeVoceEsta').parentNode);

// Questão 3 - ok
document.getElementById("primeiroFilhoDoFilho").innerHTML = 'Exercício da Trybe. Não é difícil, mas é trabalhoso kkkkk.'
console.log('3.',document.getElementById("primeiroFilhoDoFilho"));

// Questão 4 - ok
console.log('4.',document.getElementById("pai").firstElementChild);

// Questão 5 - ok
console.log('5.',document.getElementById("elementoOndeVoceEsta").previousElementSibling);

// Questão 6 - ok
console.log('6.',document.getElementById("elementoOndeVoceEsta").nextSibling);

// Questão 7 - ok
console.log('7.',document.getElementById("elementoOndeVoceEsta").nextElementSibling);

// Questão 8 - 
console.log('8.',document.getElementById("pai").lastElementChild.previousElementSibling);