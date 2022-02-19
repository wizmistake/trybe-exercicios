/*
3. Considere o array de strings abaixo:

  let array = ['java', 'javascript', 'python', 'html', 'css'];

Escreva dois algoritmos: um que retorne a maior palavra deste array e outro que retorne a menor. Considere o número de caracteres de cada palavra.
*/


let array = ['java', 'javascript', 'python', 'html', 'css'];
let palavra = "";
let maior = "";
let menor = "";

for(n=0; n<array.length; n+=1){
  palavra = array[n];
  //console.log("palavra:",palavra, palavra.length);
  //console.log("maior:",maior, maior.length);
  if(palavra.length >= maior.length){
    maior = palavra;
  }
  else{
    maior = maior;
  }
  menor = maior;
}
for(n=0; n<array.length; n+=1){
  palavra = array[n];
  if(menor.length >= palavra.length){
    menor = palavra;
  }
  else{
    menor = menor;
  }
}

console.log("A MAIOR palavra é:",maior);
console.log("A MENOR palavra é:",menor);
