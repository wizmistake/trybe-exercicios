/*
1. Crie uma variável chamada "weekDay" que recebe a string "quarta-feira".
2.Implemente condicionais para que:
  - Se nossa variável "weekDay" for "segunda-feira", "terça-feira", "quarta-feira", "quinta-feira" ou "sexta-feira", imprima "Oba, mais um dia de aprendizado na Trybe >:D".
  - Se for algum dia de fim de semana, imprima "FINALMENTE, descanso merecido UwU".
*/

const diaSemana = ["domingo", "segunda-feira", "terca-feira", "quarta-feira", "quinta-feira", "sexta-feira", "sabado"];

let indice = [Math.floor(Math.random() * diaSemana.length)];

const weekDay = diaSemana[indice];

console.log(weekDay);

if(weekDay == "segunda-feira" || weekDay == "terca-feira" || weekDay == "quarta-feira" || weekDay == "quinta-feira" || weekDay == "sexta-feira"){
  console.log("Oba, mais um dia de aprendizado na Trybe>:D");
}
else{
  console.log("FINALMENTE, descanso merecido UwU");
}