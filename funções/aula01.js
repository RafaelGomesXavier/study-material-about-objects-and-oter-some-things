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

// Call para chamar this ou outro {}
// apply chama arrays em var, let e const
// bind retorna uma função que precisa ser ativada.



//----------------------------------------------\
// Array.from().filter(() => {})                |
// Array.prototype.filter.call(this, () => {})  |
//----------------------------------------------/
function maxText() {
const numeros = [2, 3232, 2231, 122, 232321, 51221321, 12];
const a = Math.max.call(this, numeros);
const b = Math.max.apply(this, numeros);
const c = numeros.reduce((acc, item) => {
    return item > acc? item : acc
});
let i = 0;
const d = numeros.some((item) => {
    return item > i ? item : i;
})
console.log(a);//call
console.log(b);//apply
console.log(c);//reduce
console.log(d);//some
}

