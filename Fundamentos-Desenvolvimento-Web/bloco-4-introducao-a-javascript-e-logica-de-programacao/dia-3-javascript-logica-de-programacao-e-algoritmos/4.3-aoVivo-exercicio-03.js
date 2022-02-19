/*
3. Crie um algoritmo que simula o jogo "pedra, papel e tesoura" levando em consideração que são apenas duas pessoas jogando e imprima o resultado no formato:
"Player 1 won" ou "A Ties" ou "Player 2 won". 
*/

const x = ["pedra","papel","tesoura"];
const y = ["pedra","papel","tesoura"];
let indice1 = [Math.floor(Math.random() * x.length)];
let indice2 = [Math.floor(Math.random() * y.length)];
let player1 = x[indice1];
let player2 = y[indice2];


if(player1 == "pedra" && player2 =="papel"){
  console.log("player 1:", player1);
  console.log("player 2:", player2);
  console.log("Player 2 WON");
}
else if(player1 == "pedra" && player2 =="tesoura"){
  console.log("player 1:", player1);
  console.log("player 2:", player2);
  console.log("Player 1 WON");
}
else if(player1 == "papel" && player2 =="tesoura"){
  console.log("player 1:", player1);
  console.log("player 2:", player2);
  console.log("Player 2 WON");
}
else if(player1 == "papel" && player2 =="pedra"){
  console.log("player 1:", player1);
  console.log("player 2:", player2);
  console.log("Player 1 WON");
}
else if(player1 == "tesoura" && player2 =="pedra"){
  console.log("player 1:", player1);
  console.log("player 2:", player2);
  console.log("Player 2 WON");
}
else if(player1 == "tesoura" && player2 =="papel"){
  console.log("player 1:", player1);
  console.log("player 2:", player2);
  console.log("Player 1 WON");
}
else{
  console.log("player 1:", player1);
  console.log("player 2:", player2);
  console.log("EMPATE - A Ties");
}
