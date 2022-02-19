/*
Dado o Array: menu = ['Home', 'Serviços', 'Portfólio', 'Links']; faça:
  1. Obtenha o valor "Serviços" do array menu;
  2. Procure o índice do valor "Portfólio" do array menu;
  3. Adicione o valor "Contato" no final do array menu.
*/


let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];

// Vou supor que eu não conheço o conteúdo do array "menu".
let index1 = menu.indexOf('Serviços');
let valor;
if (index1 != -1) {
  valor = menu[index1];
  console.log('O valor do [indice]', index1, 'do array menu é:', valor);
} else {
  console.log('Não existe valor, pois nenhum [indice] do array correspondeu a pesquisa');
}
// Questão 1 - ok.

let index2 = menu.indexOf('Portfólio');
if (index2 != -1) {
  console.log('O [indice] do valor "Portfólio" no array menu é:',index2);
} else {
  console.log('Não existe valor "Portólio" no array menu.');
}
// Questão 2 - ok

menu.push('Contato');
console.log(menu);
