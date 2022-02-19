/*
5. Crie um algoritmo que recebe a idade de Carolzita , Murilo e Baêta e imprime quem é a pessoa mais nova no formato:
"Pessoa" é a mais nova.
*/

let Carolzita = Math.floor(Math.random() * (100-0+1));
let Murilo = Math.floor(Math.random() * (100-0+1));
let Baêta = Math.floor(Math.random() * (100-0+1));

console.log("Carolzita tem "+Carolzita+" anos.");
console.log("Murilo tem "+Murilo+" anos.");
console.log("Baêta tem "+Baêta+" anos.");

if(Carolzita<Murilo && Carolzita<Baêta){
  console.log("Carolzita é a pessoa mais nova.");
}
else if(Murilo<Carolzita && Murilo<Baêta){
  console.log("Murilo é a pessoa mais nova.");
}
else if(Baêta<Carolzita && Baêta<Murilo){
  console.log("Baêta é a pessoa mais nova.");
}
// caso dois valores sejam iguais.
else if(Carolzita==Murilo && Carolzita<Baêta){
  console.log("Carolzita e Murilo são as pessoas mais novas.");
}
else if(Carolzita==Baêta && Carolzita<Murilo){
  console.log("Carolzita e Baêta são as pessoas mais novas.");
}
else if(Murilo==Baêta && Murilo<Carolzita){
  console.log("Murilo e Baêta são as pessoas mais novas.");
}
else{
  console.log("Todos tem a mesma idade.");
}
