/*
Utilizando o forEach na array abaixo,
some os valores de taxa e os valores de Recebimento
*/

const transacoes = [
  {
    descricao: 'Taxa do Pão',
    valor: 'R$ 39',
  },
  {
    descricao: 'Taxa do Mercado',
    valor: 'R$ 129',
  },
  {
    descricao: 'Recebimento do Cliente',
    valor: 'R$ 99',
  },
  {
    descricao: 'Taxa do Banco',
    valor: 'R$ 129',
  },
  {
    descricao: 'Recebimento do Cliente',
    valor: 'R$ 49',
  },
];


console.log(transacoes)
let valorTaxa = 0;
let valorReceb = 0
transacoes.forEach((item) => {
  const itemDesc = item.descricao.slice(0, 3);
  const itemValor = +item.valor.replace('R$ ','');
  if(itemDesc === 'Tax') {
    valorTaxa+= itemValor;
  }
  if(itemDesc === 'Rec') {
    valorReceb+= itemValor;
  }
});
console.log(`A soma das taxas: R$${valorTaxa}`);
console.log(`A soma dos Recebimentos: R$${valorReceb}`);


// Retorne um array com a lista abaixo
const transportes = 'Carro;Avião;Trem;Ônibus;Bicicleta';
const array = transportes.split(';');
console.log(array)

// Subistitua todo os span's por a's
let html = 
`<ul>
  <li><span>Sobre</span></li>
  <li><span>Produtos</span></li>
  <li><span>Contato</span></li>
</ul>`;
html = html.split('span').join('a');
console.log(html);

// Retorne o último caracter de frase
const frase = 'Melhor do ano!';
console.log(frase.slice(-1));

// Retorne o total de taxas
const transacoes2 = ['Taxa do Banco', '  TAXA DO PÃO', '  taxa do mercado', 'depósito Banário', 'TARIFA especial'];
let totalTaxas = 0;
transacoes2.forEach(item => {
  const i = item.toLocaleLowerCase().trim().substring(0, 4);
  if(i === 'taxa') {
    totalTaxas++
  }
})
console.log(totalTaxas);