// Selecione cada curso e retorne um array
// com objetos contendo o titulo, descrição
// aulas e horas de cada curso.
function initArrayWithObjectsInside(){
    const cursos = document.querySelectorAll('.curso');
    const arrayCursos = Array.from(cursos);
    const arrayMap = arrayCursos.map((curso) => {
        const titulo = curso.querySelector('h1').innerText;
        const descricao = curso.querySelector('p').innerText;
        const aulas = curso.querySelector('.aulas').innerText;
        const horas = curso.querySelector('.horas').innerText;
        return {
            titulo,
            descricao,
            aulas,
            horas,
        }
    })
    console.log(arrayMap);
    console.log(arrayCursos);
}
function MaioresWith180() {
// Retorne uma lista com os números maiores que 180
const numeros = [3, 44, 333, 23, 122, 322, 33];
const numerosMaiores = numeros.filter((maior) => {
    return maior > 180;
})
console.log(numerosMaiores);
}
function hasBateriaOnList(){
// Verifique se Baixo faz parte
// da lista de instrumentos e retorne true
const instrumentos = ['Gitarra', 'Baixo', 'Bateria', 'Teclado'];
const isTrue = instrumentos.some((item) => {
    return item === 'Baixo';
})
console.log(isTrue)
}

function totalComprasReduceAndForEach(){
// Retorne o valor total das comprar
const compras = [
    {
        item: 'Banana',
        preco: 'R$ 4,99',
    },
    {
        item: 'Ovo',
        preco: 'R$ 2,99',
    },
    {
        item: 'Carne',
        preco: 'R$ 25,49',
    },
    {
        item: 'Refrigerante',
        preco: 'R$ 5,35',
    },
    {
        item: 'Queijo',
        preco: 'R$ 10,60'
    }
];
// let totalCompras = 0;
// compras.forEach((preco) => {
//   const valorLimpo = +preco.preco.replace('R$', '').trim().replace(',','.');
//     totalCompras+= valorLimpo;
// })
// console.log(totalCompras.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}));

const totalCompras = compras.reduce((acc, item) => {
    const valorLimpo = +item.preco.replace('R$','').trim().replace(',','.');
    return valorLimpo + acc
},0)
console.log(totalCompras);
}




// Selecione cada curso e retorne um array
// com objetos contendo o titulo, descrição
// aulas e horas de cada curso.



const cursos = document.querySelectorAll('.curso');
const cursosArray = Array.prototype.map.call(cursos, (curso) => {
    const titulo = curso.querySelector('.titulo').innerText;
    const descricao = curso.querySelector('.descricao').innerText;
    const aulas = curso.querySelector('.aulas').innerText;
    const horas = curso.querySelector('.horas').innerText;
    return {
        titulo,
        descricao,
        aulas,
        horas,
    }
    
})
console.log(cursosArray);