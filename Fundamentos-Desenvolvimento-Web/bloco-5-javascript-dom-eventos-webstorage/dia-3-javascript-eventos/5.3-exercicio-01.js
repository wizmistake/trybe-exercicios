const firstLi = document.getElementById('first-li');
const secondLi = document.getElementById('second-li');
const thirdLi = document.getElementById('third-li');
const input = document.getElementById('input');
const myWebpage = document.getElementById('my-spotrybefy');


// 1. Copie esse arquivo e edite apenas ele;
// 1.1. Antes de começar os exercícios, use o LiveServer para dar uma olhada em como está a página no navegador.
// 1.2. Note que uma das caixas está um pouco acima das outras. Por que isso ocorre?
// RESPOSTA: Pq no arquivo .CSS, a caixa em questão está deslocada no eixo Y.
// .tech {transform: translateY(-20px);}

// 2. Crie uma função que adicione a classe 'tech' ao elemento `li` quando for clicado.

// 2.1. Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?

// 3. Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
// com a classe 'tech';

// 4. Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele
// redirecione para alguma página;
// 4.1. Que tal redirecionar para seu portfólio?

// 5. Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
// a cor do mesmo;

// Segue abaixo um exemplo do uso de event.target:


function resetText(event) {
  // O Event é passado como um parâmetro para a função.
  event.target.innerText = 'Opção reiniciada';
  // O event possui várias propriedades, porém a mais usada é o event.target,
  // que retorna o objeto que disparou o evento.
}

firstLi.addEventListener('dblclick', resetText);

// Não precisa passar o parâmetro dentro da callback resetText. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na nossa função retornará o objeto 'firstLi'.


// Questão 2 e 2.1 - ok
function trocaClasse(event) {
  let techClass = document.querySelector('.tech');
  techClass.classList.remove('tech');
  event.target.classList.add('tech');
}
firstLi.addEventListener('click', trocaClasse);
secondLi.addEventListener('click', trocaClasse);
thirdLi.addEventListener('click', trocaClasse);


// Questão 3 - ok
function descricao(event) {
  let techClass = document.querySelector(".tech");
  techClass.innerText = event.target.value;
}
input.addEventListener('input', descricao);


// Questão 4 e 4.1 - ok
function redirecionar(event) {
  window.open('https://github.com/wizmistake/trybe-exercicios', '_blank');
}
myWebpage.addEventListener('dblclick', redirecionar);


// Questão 5 - ok
function mudaCor(event) {
  myWebpage.style.color = 'red';
}
function voltaCor(event) {
  myWebpage.style.color = 'white';
}
myWebpage.addEventListener('mouseover', mudaCor);
myWebpage.addEventListener('mouseleave', voltaCor);