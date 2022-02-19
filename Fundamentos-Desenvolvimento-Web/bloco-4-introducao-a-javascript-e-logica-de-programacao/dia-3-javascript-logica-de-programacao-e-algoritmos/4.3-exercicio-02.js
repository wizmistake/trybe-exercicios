/*
2. Agora, desenvolva um algoritmo que é capaz de inverter uma palavra. Por exemplo, a palavra "banana" seria invertida para "ananab". Utilize a string abaixo como exemplo, depois troque por outras para verificar se seu algoritmo está funcionando corretamente. 
*/


let word = "tryber";
let novaWord = "";

for ( n = word.length-1; n >= 0; n -= 1) {
  novaWord += word[n];
  //console.log("index",n);
  //console.log(novaWord);
}
console.log(novaWord);


/*
Outra forma de fazer (até melhor), é utilizando três funções:
1. split() - Separa cada elemento da string e coloca num array.
  ex: let word = "tryber";
      let novaWord;
      novaWord = word.split(""); --> ["t","r","y","b","e","r"]
2. reverse() - Inverte automaticamente os elementos de uma array.
  ex: novaWord = ["t","r","y","b","e","r"];
      novaWord = novaWord.reverse(); --> ["r","e","b","y","r","t"]
3. join() - Junta todos os elementos de um array e transforma em uma string.
  ex: novaWord = ["r","e","b","y","r","t"];
      novaWord = novaWord.jin(""); --> "rebyrt"

Juntando os três métodos, ficaria:
  let word = "tryber";
  let novaWord;

  novaWord = word.split("").reverse().(join");
*/


let word1 = "Banana";
let novaWord1;

novaWord1 = word1.split("").reverse().join("");
console.log(novaWord1);
