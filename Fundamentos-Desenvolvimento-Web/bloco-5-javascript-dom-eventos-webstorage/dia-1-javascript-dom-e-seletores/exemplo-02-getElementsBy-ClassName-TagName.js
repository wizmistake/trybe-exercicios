/*
Utilizando o mesmo template de exercício anterior (exemplo-01-ById):

  1. Adicione uma classe igual para os dois parágrafos.
  2. Recupere os seus parágrafos via código JavaScript , usando a função getElementsByClassName ;
  3. Altere algum estilo do primeiro deles.
  4. Recupere o subtítulo e altere a cor dele usando a função getElementsByTagName.
*/


let pElements = document.getElementsByClassName('paragraph');
for (let i = 0; i < pElements.length; i += 1) {
  console.log(pElements[i]);
}
pElements[0].style.color = 'green';
document.getElementsByTagName('h4')[0].style.color = 'blue';