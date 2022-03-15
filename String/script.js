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
let totalTaxas = 0;
let totalReceb = 0;
transacoes.forEach((movimentacao) => {
  movDescription = movimentacao.descricao.trim().toLowerCase().substring(0, 4);
  switch (movDescription) {
    case 'taxa':
      totalTaxas += movValue = +movimentacao.valor.replace('R$ ', '');
      break;
    case 'rece':
      totalReceb += movValue = +movimentacao.valor.replace('R$ ', '');
      break;
  }
})
console.log(totalTaxas)
console.log(totalReceb)

// Retorne um array com a lista abaixo
const transportes = 'Carro;Avião;Trem;Ônibus;Bicicleta';
console.log(transportes.split(';'));

// Subistitua todo os span's por a's
let html = 
`<ul>
  <li><span>Sobre</span></li>
  <li><span>Produtos</span></li>
  <li><span>Contato</span></li>
</ul>`;

html = html.split('span').join('a');
console.log(html)

// Retorne o último caracter de frase
const frase = 'Melhor do ano!';
console.log(frase[frase.length -1])
console.log(frase.slice(-1));

// Retorne o total de taxas
const transacoes2 = ['Taxa do Banco', '  TAXA DO PÃO', '  taxa do mercado', 'depósito Banário', 'TARIFA especial'];


taxasTotal = 0;
transacoes2.forEach((item) => {
  const taxa = item.trim().toLocaleLowerCase().substring(0, 4);
  if(taxa === 'taxa') {
    taxasTotal++
  }
})
console.log(taxasTotal)



