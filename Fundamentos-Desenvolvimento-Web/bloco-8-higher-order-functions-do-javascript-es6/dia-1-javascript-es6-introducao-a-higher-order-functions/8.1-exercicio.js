/*
  1 - Crie uma função que retorne um objeto no formato { nomeCompleto, email } representando uma nova pessoa contratada.
  Passe sua função como parâmetro da HOF newEmployees para criar cada pessoa contratada em seu respectivo id. A sua função deve receber como parâmetro o nome completo da pessoa funcionária e a partir dele gerar automaticamente um email no formato nome_da_pessoa@trybe.com.

  const newEmployees = () => {
  const employees = {
    id1: '', // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: '', // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: '', // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  return employees;
};
*/

const employeesId = (nome) => {
  const email = nome.toLowerCase().replace(" ","_");
  return {nome, email: `${email}@trybe.com`};
}

const newEmployees = (nome) => {
  const employees = {
    id1: nome('Pedro Guerra'),
    id2: nome('Luiza Drumond'),
    id3: nome('Carla Paiva'),
  };
  return employees;
};

console.log(newEmployees(employeesId));

/*
  2 - Desenvolva uma HOF que retorna o resultado de um sorteio. Esta HOF irá gerar um número aleatório entre 1 e 5 recebendo como parâmetros o número apostado e uma função que checa se o número apostado é igual ao número sorteado. O retorno da sua HOF deve ser uma string (Ex: "Tente novamente" ou "Parabéns você ganhou").
*/

const gerarAleatorioEntre = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const sorteio = (numero, verificador) => {
  numero === verificador ? console.log("Parabéns, você ganhou!") : console.log("Tente Novamente.");
}

sorteio (3, gerarAleatorioEntre(1,5));
