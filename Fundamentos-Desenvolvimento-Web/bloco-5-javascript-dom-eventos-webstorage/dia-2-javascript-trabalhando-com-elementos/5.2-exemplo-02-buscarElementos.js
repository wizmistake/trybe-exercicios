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
console.log(document.getElementById('elementoOndeVoceEsta'));

// Questão 2 - ok
document.getElementById('elementoOndeVoceEsta').parentNode.style.color = 'red';
console.log(document.getElementById('elementoOndeVoceEsta').parentNode);

// Questão 3 - ok
document.getElementById('primeiroFilhoDoFilho').innerHTML = 'Exercício da Trybe. Não é difícil, mas é trabalhoso kkkkk.'
console.log(document.getElementById('primeiroFilhoDoFilho'));

// Questão 4 - ok
console.log(document.getElementById('pai').firstChild);
