/*
1.Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas constantes, a e b , definidas no começo com os valores que serão operados. Faça programas para:
  - Adição (a + b)
  - Subtração (a - b)
  - Multiplicação (a * b)
  - Divisão (a / b)
  - Módulo (a % b)
*/

 let x = 100*Math.random();
 let y = 100*Math.random();
 const a = parseInt(x);
 const b = parseInt(y);

 const adicao = a + b;
 const subtracao = a - b;
 const multiplicacao = a * b;
 const divisao = a / b;
 const modulo = a%b; 

 console.log("a =",a,"b =",b);
 console.log("A adição de a + b =", adicao);
 console.log("A subtração de a - b =", subtracao);
 console.log("A multiplicação de a * b =", multiplicacao);
 console.log("A divisão de a / b =", divisao);
 console.log("O módulo de a % b =", modulo);