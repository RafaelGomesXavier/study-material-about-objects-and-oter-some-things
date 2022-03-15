// Retorne um número aleatório
// entre 1050 e 2000

const aleatorio = Math.floor(Math.random() * (2000 - 1050 + 1) + 1050);
console.log(aleatorio);

// Retorne o maior número da lista abaixo
const numeros = '4, 5, 20, 8, 9';
const ton = numeros.split(',')
console.log(ton)

// Crie uma função para limpar os preços
// e retornar os números com centavos arredondados
// depois retorne a soma total

const listaPrecos = ['R$ 59,99', ' R$ 100,222', 'R$ 230   ', 'r$ 200'];
let somaTotal = 0;
listaPrecos.forEach((item) => {
  const itemLimpo = item.toUpperCase().trim().replace('R$ ','').replace(',','.');
  item = parseFloat(itemLimpo).toFixed(2);
  somaTotal+= Number(item)
  console.log(item)
});
console.log(somaTotal.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}));