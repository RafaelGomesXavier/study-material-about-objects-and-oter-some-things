// const instrumentos = ['Guitarra','Baixo', 'Vilão'];
// const precos = [49, 99, 69, 89];

// const dados = [new String('Tipo 1'), ['Carro', 'Portas', {cor: 'Azul', preco: 2000}], function andar(nome) {console.log(nome) }];

// const carros = new Array('Ford', 'Fiat', 'Honda');

// carros[2] = 'Ferrari';
// carros[3] = 'Kia';
// carros[20] ='Kia';

// console.log(carros.length)


// const li = document.querySelectorAll('li');
// const arrayLi = Array.from(li);

// const obj = {
//   0: 'Rafael',
//   1: 'Gomes',
//   2: 'Gostoso',
//   length: 3,
// }

// const objArray = Array.from(obj);

// console.log(arrayLi);
// console.log(li)

// const frutas = ['Banana', 'Pêra', ['Uva Roxa', 'Uva Verde']];
// console.log(frutas[2][0].length);

// instrumentos.sort();

// const idade = Array(32,23,33,43,1,12,8);
// console.log(idade.sort())
// console.log(instrumentos);





// Array modificadores

// const carros = Array('Ford', 'Fiat', 'Vw');

// carros.unshift('Kia', 'Ferrari'); // retorna o total de itens e modifica array
// carros.push('Parati', 'Gol'); // retorna o total de itens e modifica array
// carros.pop() // Retorna o item retirado e modifica array
// carros.shift() // Retorna o item retirado e modifica array
// carros.reverse() // Inverte a ordem do arry e modifica array
// carros.splice(1, 0, 'Kia', 'Mustang') // Adiciona os itens no array e modifica
// // valor 1 refere-se a posição que queremos inserir nossos itens
// // valor 0, refere-se a quantidade de itens que queremos remover ou substituir
// carros.splice(3, 2, 'Ferrari') // Modifica array, retorna itens retirados
// carros.fill('Fusca', 0, 2); // Preenche array com item apartir de uma pasição quantas vezes quisermos. Neste caso apartir da posição 0 inserir 2x Altera array

// console.log(carros);


// Array de acesso, não midificam array, apenas retornam;

const transporte1 = Array('Barco', 'Avião');
const transporte2 = Array('Carro', 'Moto');
const transportes = transporte1.concat.transporte2;
// 'Barco', 'Avião', 'Carro', 'Moto'

console.log(transportes);
const maisTransportes = [].concat(transporte1, transporte2, 'Van');
console.log(maisTransportes)

const linguagens = Array('html', 'css', 'js', 'php', 'python', 'js');
console.log(linguagens.includes('css')); // Procura na array se possui o valor
console.log(linguagens.includes('ruby'));// e retorna um boolean
console.log(linguagens.indexOf('python')); // Procura o index de um item, para apos
console.log(linguagens.indexOf('js'));// encontrar o primeiro valor correspondente
console.log(linguagens.lastIndexOf('js')); // Retorna o index do ultimo item encontrado
// Método Join insere conteudo sempre aonde possui( , ) separando um array
console.log(linguagens.join())
console.log(linguagens.join(' '))
console.log(linguagens.join('-_-'))

// slice clona array
console.log(linguagens.slice(3)) // Retorna os itens a partir da posição 3
console.log(linguagens.slice(1, 4)) // Retorna os itens a partir da posição 1 até 4


console.log(linguagens);

let htmlString = '<h2>Titúlo Principal</h2>'
htmlString = htmlString.split('h2'); // Retorna o array separado por itens
// ['<', '>Titúlo Principal</', '>']
htmlString = htmlString.join('h1');
// <h1>Titúlo Principal</h1>
console.log(htmlString)