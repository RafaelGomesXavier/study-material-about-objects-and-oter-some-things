// const carros = ['Ford', 'Fiat', 'Honda'];
// carros.forEach((item, index, array)=>{
//   console.log(item.toUpperCase());
// })

// const li = document.querySelectorAll('li');
// const retornoForEach = li.forEach((item) => {
//   item.classList.add('Ativo');
// });
// console.log(retornoForEach);


// const carros = ['Ford', 'Fiat', 'Honda'];
// const arrayCarro = carros.map((item, index, array) => {
//   return item.toUpperCase();
// })


// console.log(arrayCarro[1] = 'teste');
// console.log(arrayCarro);
// console.log(carros);



// const numeros = [2, 4, 5, 6, 78];
// let i = 2;
// const numerosMap = numeros.map((item) => {
//   const multiplacados = (i * item);
//   return multiplacados;
// });
// console.log(numerosMap);
// console.log(numeros)


// const aulas = [
//   {
//     nome: 'HTML 1',
//     min: 15,
//   },  
//   {
//     nome: 'HTML 2',
//     min: 10,
//   },  
//   {
//     nome: 'CSS 1',
//     min: 20,
//   },  
//   {
//     nome: 'JS 1',
//     min: 25,
//   },  
// ];


// const aulasMin = aula => aula.min;
// const aulasNome = aula => aula.nome;
// const arrayMin = aulas.map(aulasMin);;
// const arrayNome = aulas.map(aulasNome);
// console.log(arrayNome)
// console.log(arrayMin)


// const aulas = [10, 25, 38, 4];

// const reduceAulas = aulas.reduce((acumulador, item, index, array) => {
//   console.log(acumulador, item, index);
//   return item + acumulador
// },0)
// console.log(reduceAulas);


// const reduceMaior = aulas.reduce((acumulador, item) => {
//   console.log(acumulador, item)
//   return item < acumulador? acumulador : item;
// },0)

// console.log(reduceMaior)



// const aulas = [
//     {
//       nome: 'HTML 1',
//       min: 15,
//     },  
//     {
//       nome: 'HTML 2',
//       min: 10,
//     },  
//     {
//       nome: 'CSS 1',
//       min: 20,
//     },  
//     {
//       nome: 'JS 1',
//       min: 25,
//     },  
//   ];


// const listaAulas = aulas.reduce((acumulador, atual, index) => {
//   console.log(atual.min);
//   acumulador[index] = atual.nome;
//   console.log(acumulador)
//   return acumulador;


// }, {})




const frutas = ['Banana', '', 'Pêra', 'Uva'];
const aulas = [10, 25, 38, 4];


// const frutasRight = frutas.reduceRight((acc, atual) => {
//   return acc + ' ' + atual;
// }, [])
// // console.log(frutasRight);

// const frutasSome = frutas.some((item) => {
//   return item === 'Maçã'
// })
// // console.log(frutasSome);

// const frutasEvery = frutas.every((item) => {
//   return item;
// })
// // console.log(frutasEvery)

// const frutasMap = frutas.map((item, index) => {
//   return item.toUpperCase();
// })
// // console.log(frutasMap);

// const frutasFindex = frutas.findIndex((fruta) => {
//   return fruta ==='Uva';
// })
// // console.log(frutasFindex);

// const aulasFind = aulas.find((aula) => {
//   return aula > 35
// })
// console.log(aulasFind)

// const arrayFilter = frutas.filter((item) => {
//     console.log(item);
//     return item.length > 3;
// });
// console.log(arrayFilter);

