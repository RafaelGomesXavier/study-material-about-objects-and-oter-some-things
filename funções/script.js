// // const perimetro = new Function('lado', 'return lado * 4');

// // function soma(n1, n2) {
// //   return n1 + n2 + ''
// // }
// // console.log(soma(3,3).charAt(0));
// // console.log(soma.name.toUpperCase());

// function darOi(nome, idade) {
//   return console.log('oi' + nome + idade);
// }
// darOi.call(null, 'Rafael', 27);

// const carro ={
//   marca: 'Ford',
//   ano: 2018,
// }
// // function descricaoCarro() {
// //   // this apontando para o objeto window
// //   console.log(this.marca + ' ' + this.ano);
// // }
// // descricaoCarro();

// // function descricaoCarro(velocidade) {
// //   console.log(this.marca + ' ' + this.ano + velocidade);
// // }
// // // Primeiro parametro em call é obj (obj, parametros reais ...)
// // descricaoCarro.call({marca: 'Honda', ano: '2015'}, 100);


// // const carros = ['Fird', 'Fiat', 'Vw'];
// // carros.forEach.call(carros, (carro) => {
// //   console.log(carro);
// // });

// function Dom(seletor) {
//   this.element = document.querySelector(seletor);
// }
// // // this.element = 'li'
// // li = document.querySelector('li')
// // Dom('li')

// Dom.prototype.ativo = function(classe) {
//   console.log(this)
//   this.element.classList.add(classe)
// }
// const ul = {
//  element: document.querySelector('ul'),
// }
// Dom.prototype.ativo.call(ul, 'avaito')


// const frutas = ['Uva', 'Maçã', 'Banana'];

// Array.prototype.pop.call(frutas);
// console.log(frutas);

// const li = document.querySelectorAll('li');
// Array.prototype.filter.call(li, (item) => {
//   console.log(item)
// })

//----------------------------------------------\
// Array.from().filter(() => {})                |
// Array.prototype.filter.call(this, () => {})  |
//----------------------------------------------/
