const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

/*
  1. Crie uma função para adicionar o turno da noite na lesson2 . Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela.
*/

 const turno = (objeto, chave, valor) => {
   objeto[chave] = valor;
   console.log(objeto);
 }
 turno(lesson2, 'turno', 'noite');

/*
  2. Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.
*/

const listarObjeto = (objeto) => {
  for (let key in objeto) {
    console.log(key);
  }
}
listarObjeto(lesson3);

/*
  3. Crie uma função para mostrar o tamanho de um objeto.
*/

const tamanhoObjeto = (objeto) => {
  let tamanho = 0;
  for (let key in objeto) {
    tamanho += 1;
  }
  console.log(`O tamanho do objeto é ${tamanho}`);
}
tamanhoObjeto(lesson1);

/*
  4. Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.
*/

const valoresObjeto = (objeto) => {
  for (let valor in objeto) {
    console.log(objeto[valor]);
  }
}
valoresObjeto(lesson2);

/*
  5. Crie um objeto de nome allLessons , que deve agrupar todas as aulas através do Object.assign . Cada chave desse novo objeto será uma aula, sendo essas chaves: lesson1 , lesson2 e lesson3 .
*/

const allLessons = Object.assign({},{lesson1, lesson2, lesson3});
console.log(allLessons);

/*
  6. Usando o objeto criado no exercício 5, crie uma função que retorne o número total de estudantes em todas as aulas.
*/

const numeroEstudantes = (objeto) => {
  let estudantes = 0;
  for (valor in Object.keys(objeto)) {
    estudantes += objeto[Object.keys(objeto)[valor]].numeroEstudantes;
  }
  console.log(estudantes);
}
numeroEstudantes(allLessons);

/*
  7. Crie uma função que obtenha o valor da chave de acordo com a sua posição no objeto.
*/

const valorChave = (objeto, index) => {
  const valor = Object.values(objeto);
  console.log(valor[index]);
}
valorChave(lesson2, 0);

/*
  8. Crie uma função que verifique se o par (chave / valor) existe na função. Essa função deve possuir três parâmetros, sendo eles: o objeto, o nome da chave e o valor da chave.
*/

const validaObjeto = (objeto, chave, valor) => {
  const entradas = Object.entries(objeto);
  let texto = '';
  for (let index in entradas) {
    if (entradas[index][0] === chave && entradas[index][1] === valor) {
      texto = 'true';
    } else {
      texto = 'false';
    }
  }
   console.log(texto);
}
validaObjeto(lesson3, 'turno', 'noite');
validaObjeto(lesson3, 'materia', 'Maria Clara');
