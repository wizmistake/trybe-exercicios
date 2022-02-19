// alterada a cor do background da id header-container para 'verde'.
document.getElementById("header-container").style.backgroundColor = 'green';

// alterada a cor do background da .class emergency-tasks para 'rosa' - [0] pq só tem 1 elemento.
document.getElementsByClassName("emergency-tasks")[0].style.backgroundColor = 'pink';

// "emergency" vai armazenar o tamanho do array de h3 (filho) dentro de .emergency-tasks (pai).
let emergency = document.querySelectorAll(".emergency-tasks h3");
for (let n = 0; n < emergency.length; n += 1) { 
  document.querySelectorAll(".emergency-tasks h3")[n].style.backgroundColor = 'blueViolet'; // alterada a cor do background das h3 (filho) dentro de .emergency-tasks (pai) para 'violeta-azulado'.
}

// alterada a cor do background da .class no-emergency-tasks para 'dourado' - [0] pq só tem 1 elemento.
document.getElementsByClassName("no-emergency-tasks")[0].style.backgroundColor = 'gold';

// "noEmergency" vai armazenar o tamanho do array de h3 (filho) dentro de .no-emergency-tasks (pai).
let noEmergency = document.querySelectorAll(".no-emergency-tasks h3");
for (let i = 0; i < noEmergency.length; i += 1) {
  document.querySelectorAll(".no-emergency-tasks h3")[i].style.backgroundColor = 'black'; // alterada a cor do background das h3 (filho) dentro de .no-emergency-tasks (pai) para 'preto'.
}

// alterada a cor do background da id footer-container para 'algum tipo de cinza'.
document.getElementById("footer-container").style.backgroundColor = 'darkSlateGray';