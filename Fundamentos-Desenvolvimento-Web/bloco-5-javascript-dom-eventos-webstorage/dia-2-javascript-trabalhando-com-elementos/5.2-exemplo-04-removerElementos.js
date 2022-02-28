/*
  1. Remova todos os elementos filhos de "paiDoPai" exceto "pai" , "elementoOndeVoceEsta" e "primeiroFilhoDoFilho" .
*/


let noPai = document.getElementById("paiDoPai");
let elemento = noPai.childNodes; 
let filho1 = document.getElementById("pai");
let filho2 = document.getElementById("elementoOndeVoceEsta");
let filho3 = document.getElementById("primeiroFilhoDoFilho");


for (let i = 0; i < elemento.length; i += 1) {
  console.log(elemento[i]);
}

// Não entendi PORRA NENHUMA! Como vou remover nó filho, quando tenho que percorrer nós "netos"? Só se eu for buscar um por um.

// paiDoPai só tem 1 filho, que é o "pai". O resto é neto e bisneto de paiDoPai.

// Taquipariu exercício tosco.



