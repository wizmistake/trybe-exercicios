/*
11. Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu salário bruto o INSS e o IR. Faça um programa que, dado um salário bruto, calcule o líquido a ser recebido.
  - A notação para um salário de R$1500,10, por exemplo, deve ser 1500.10. Para as faixas de impostos, use as seguintes referências:
  
  - INSS (Instituto Nacional do Seguro Social)
      - Salário bruto até R$ 1.556,94: alíquota de 8%
      - Salário bruto de R$ 1.556,95 a R$ 2.594,92: alíquota de 9%
      - Salário bruto de R$ 2.594,93 a R$ 5.189,82: alíquota de 11%
      - Salário bruto acima de R$ 5.189,82: alíquota máxima de R$ 570,88
  
  - IR (Imposto de Renda)
      - Até R$ 1.903,98: isento de imposto de renda
      - De R$ 1.903,99 a 2.826,65: alíquota de 7,5% e parcela de R$ 142,80 a deduzir do imposto
      - De R$ 2.826,66 a R$ 3.751,05: alíquota de 15% e parcela de R$ 354,80 a deduzir do imposto
      - De R$ 3.751,06 a R$ 4.664,68: alíquota de 22,5% e parcela de R$ 636,13 a deduzir do imposto
      - Acima de R$ 4.664,68: alíquota de 27,5% e parcela de R$ 869,36 a deduzir do imposto.

Exemplo : Uma pessoa possui o salário bruto de R$ 3.000,00. O cálculo será:
  - O salário bruto está entre R$ 2.594,93 e R$ 5.189,82, então sua alíquota para INSS é de 11%. O INSS será 11% de R$ 3.000, ou seja, R$ 330,00.
  - Para descobrir o salário-base, subtraia do salário bruto a alíquota do INSS: R$ 3.000,00 - R$ 330,00 = R$ 2.670,00.
  - Para pegar o valor do IR, temos um salário (já deduzido o INSS) entre R$ 1.903,99 e 2.826,65, sendo a alíquota, então, de 7.5%, com parcela de R$ 142,80 a deduzir do imposto. Assim, temos:
      - R$ 2.670,00: salário com INSS já deduzido;
      - 7.5%: alíquota de imposto de renda;
      - R$ 142,80 parcela a se deduzir do imposto.
  - Fazendo a conta, temos: (7,5% de R$ 2.670,00) - R$ 142,80 = R$ 57,45
  - O último cálculo para conseguir o salário líquido é R$ 2.670,00 - R$ 57,45 (salário-base - valor IR) = R$ 2.612,55.

Resultado: R$ 2.612,55.

Dica: que tal identificar as alíquotas com variáveis de nomes explicativos?
*/


let salarioBruto = 3000.00;
let salarioTransicao;
let inss;
let ir;
let salarioLiquido;

//Desconto do INSS
if(salarioBruto <= 1556.94 && salarioBruto>=0){
  inss = salarioBruto * 0.08;
  salarioTransicao = salarioBruto - inss;
  console.log("INSS: sua alíquota é de 8%");
}
else if(salarioBruto>=1556.95 && salarioBruto<=2594.92){
  inss = salarioBruto * 0.09;
  salarioTransicao = salarioBruto - inss;
  console.log("INSS: sua alíquota é de 9%");
}
else if(salarioBruto>=2594.93 && salarioBruto<=5182.82){
  inss = salarioBruto * 0.11;
  salarioTransicao = salarioBruto - inss;
  console.log("INSS: sua alíquota é de 11%");
}
else if(salarioBruto>=5189.83){
  salarioTransicao = salarioBruto - 570.88;
  console.log("INSS: sua alíquota é de R$570,88");
}
else{
  console.log("INSS-Coloque um valor de salário válido.");
}


//Desconto do IR
if(salarioTransicao<=1903.98 && salarioTransicao>=0){
  salarioLiquido = salarioTransicao;
  console.log("Você está isento do IR.");
}
else if(salarioTransicao>=1903.99 && salarioTransicao<=2826.65){
  ir = (salarioTransicao * 0.075) - 142.8;
  salarioLiquido = salarioTransicao - ir;
  console.log("IR: sua alíquota é de 7,5%");
}
else if(salarioTransicao>=2826.66 && salarioTransicao<=3751.05){
  ir = (salarioTransicao * 0.15) - 354.8;
  salarioLiquido = salarioTransicao - ir;
  console.log("IR: sua alíquota é de 15%");
}
else if(salarioTransicao>=3751.06 && salarioTransicao<=4664.68){
  ir = (salarioTransicao * 0.225) - 636,13;
  salarioLiquido = salarioTransicao - ir;
  console.log("IR: sua alíquota é de 22,5%");
}
else if(salarioTransicao >= 4664.69){
  ir = (salarioTransicao * 0.275) - 869.36;
  salarioLiquido = salarioTransicao - ir;
  console.log("IR: sua alíquota é de 27,5%");
}
else{
  console.log("IR-Coloque um valor de salário válido.");
}


//Exibindo os resultados:
console.log("Salário Bruto: R$",salarioBruto);
console.log("Desconto do INSS: R$",inss);
console.log("Desconto do IR: R$",ir);
console.log("Salário Líquido: R$", salarioLiquido);
