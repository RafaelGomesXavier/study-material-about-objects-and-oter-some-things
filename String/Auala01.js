// const comida = 'Pizza';
// const agua = new String('agua');

const frase = 'A melhor comida';
const linguagem = 'JavaScript';
console.log(frase.length)
console.log(frase.charAt(frase.length))
const fraseFinal = frase.concat(linguagem + '09 09');
console.log(fraseFinal)
const fruta = 'Banana';
const listaFrutas = 'Melancia, Banana, Laranja';
console.log(listaFrutas.includes(fruta))
console.log(fruta.includes(listaFrutas))
console.log(fruta.endsWith('na'));
const rafael = {
  nome: 'Rafael',
}
console.log(rafael.nome.endsWith('l'))
const transacao1 = 'Depósito de cliente';
const transacao2 = 'Depósito de fornecedor';
const transacao3 = 'Taxa de camisas';
console.log(transacao1.slice(0, 3)); // Dep
console.log(transacao2.slice(0, 3)); // Dep
console.log(transacao3.slice(0, 3)); // Tax
console.log(transacao1.slice(12)); // cliente
console.log(transacao1.slice(-4)); // ente
console.log(transacao1.slice(3, 6)); // ósi
console.log(transacao1.substring(3, 6)); // ósi
console.log(transacao1.substring(12)); // ósi
console.log(transacao1.substring(-1)); // ósi
console.log(transacao1.length); // ósi
console.log(transacao1.toUpperCase()); // ósi
console.log(transacao1.slice(0, 4)); // ósi
console.log(transacao1.slice(-3)); // ósi
console.log(transacao1.substring(12)); // ósi
console.log(transacao1.concat(transacao2)); // ósi
console.log(transacao1.includes('cliente')); // ósi
console.log(transacao1.indexOf('c')); // ósi
console.log(transacao1.lastIndexOf('c')); // ósi
console.log(transacao1.charAt(12)); // ósi
console.log(transacao1.padStart(50, '.')); // ósi
console.log(transacao1.split(' ')); // ósi
const arryTransacao1 = transacao1.split(' ');
arryTransacao1.forEach((item) => {
  const alinhado = item.padStart(20,'.');
  console.log(alinhado)  
})
console.log('ta'.repeat(5)); // ósi
console.log('ta'.repeat(5).split('')); // ósi


