/*
 Agora você vai fazer alguns exercícios de fixação.

    1. Complete a função customerInfo() para que seu retorno seja similar a "Olá Ana Silveira, entrega para: Rafael Andrade, Telefone: 11-98763-1416, R. Rua das Flores, Nº: 389, AP: 701".

      - Note que o parâmetro da função já está sendo passado na chamada da função.

    2. Complete a função orderModifier() para que seu retorno seja similar a "Olá Luiz Silva, o total do seu pedido de marguerita, pepperoni e Coca-Cola Zero é R$ 50,00."

      - Modifique o nome da pessoa compradora.
      - Modifique o valor total da compra para R$ 50,00.
*/

const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (order) => { // Questão 1.
  // Adicione abaixo as informações necessárias.
  const endereco = 'address';
  const entregador = order.order.delivery.deliveryPerson;
  const nomeCliente = order['name'];
  const telefone = order['phoneNumber'];
  const rua = order[endereco].street;
  const n = order[endereco].number;
  const apto = order[endereco].apartment;
  console.log(`Olá ${entregador}, entrega para: ${nomeCliente}, Telefone: ${telefone}, R. ${rua}, Nº: ${n}, AP: ${apto}`);
}

customerInfo(order);

const orderModifier = (order) => { // Questão 2.
  // Adicione abaixo as informações necessárias.
  const comprador = order.name = 'Luiz Silva';
  const pizza = Object.keys(order.order.pizza);
  const bebida = order.order.drinks.coke.type;
  const total = order.payment.total = '50,00';
  console.log(`Olá ${comprador}, o total do seu pedido de ${pizza[0]}, ${pizza[1]} e ${bebida} é R$ ${total}.`);
}

orderModifier(order);