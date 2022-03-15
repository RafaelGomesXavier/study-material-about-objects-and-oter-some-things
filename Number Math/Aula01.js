console.log(Number.isNaN(NaN))
console.log(Number.isInteger(10.2))

console.log(parseFloat('99.50'));
console.log(parseFloat('100 reais'));
console.log(parseInt('100 reais'));



const preco = 2.99;
console.log(preco.toFixed() ) // 3

const carro = 1000.455;
console.log(carro.toFixed(2) ) // 1000.46

const preco2 = 1499.49;
console.log(preco2.toFixed() ) // 1499


let valor = 48.49;
valor = valor.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
console.log(valor)

console.log(Math.abs(-5.5)) // 5.5
console.log(Math.ceil(4.8334)) // 5
console.log(Math.ceil(4.3)) // 5
console.log(Math.floor(4.8334)) // 4
console.log(Math.floor(4.3)) // 4
console.log(Math.round(4.8334)) // 5
console.log(Math.round(4.3)) // 4


console.log(Math.max(3, 4, 5, 20));

console.log(Math.floor(Math.random() * 10))

console.log(Math.floor(Math.random() * (10 - 1 + 1) + 1))


