// Construindo um objeto literal 
const animal = {
    // defina as propriedades e métodos
    // prop: ,
    // meto() {},
}

// criando um objeto a partir do constructor Object
const animalzao = new Object();

// criando um objeto heranca de outro objeto
// todas as prop e métod de animal{} seram parte do DNA(prototype) de animalzinho
const animalzinho = Object.create(animal);

// adicionando prop e metod de um obj dentro de outro. Obs: não vai para o prototype
// vira prop e métod proprios do obj. Inclusive substitui um semelhante!
// Neste caso estou inserindo em animalzao as prop e metod de animal dentro dele
Object.assign(animalzao, animal);

//Definindo props de um obj{}
// o primeiro parametro passado é do Obj você quer definir as props
// o segundo parametro é o escopo do obj
const animalzaco = Object.create(animalzinho);
Object.defineProperties(animalzaco, {
// cada prop tem seu escopo com algumas definicoes:
// por padrão: variable, configurable, writable, enumerable são setadas como false
// só há necessidade de chamar a prop caso tenha vontade de mudar para true
    patas: {
        // O valor de Patas
        value: 4,
        // com false, não é possivel delete prop
        configurable: false,
        // com false, não é possivel editar o valor da prop
        writable: false,
        // A function é enumeravel?
        enumerable: false,
    },

    // definindo outro prop, pois para ter os metodos get e set, a prop não pode conter value
    dentes: {
        // passado _prop para não dar conflito com a prop de fora
        get() {
            return this._dentes;
        },
        set(valor) {
            this._dentes = valor;
        },
        enumerable: false
    },


    //Lista todos os métod e prop de um obj, com as suas devidas configs
    // Object.getOwnPropertyDescriptors()

    // Retorna um array com todas as props diretas do obj, não retorna as props do prototype
    // Object.getOwnPropertyNames()

    // Retorna um array com todas as props do prototype do obj ext Array.prototype ou Obj.prototype ...
    // Object.getOwnPropertyNames(x.prototype)

    /*
    const carro = {
        marca: 'Ford',
        ano: 2022,
    }
    Object.getOwnPropertyNames(carro);
    retorna o nome da propriedade não o valor dela!
    // ['marca', 'ano']  
    */

    // Object.keys(obj) Retorna todas as keys enumable diretoas do obj
    // Object.getPrototypeOf(obj) Retorna o prototipo do obj


})
// console.log(animalzaco);

// const frutas = ['Banana', 'Maçã'];
// const frutasCopia  = frutas.slice();
// console.log(Object.is(frutas, frutasCopia));


// Object.freeze() impede qualquer mudança nas props.
// Object.seal() impede a adição de novas props, no entanto é possivel alterar
// Object.previneExtensions() impede de adicionar novas props, mas permite deletar props já criadas

// const bike = {
//     rodas: 2,
// }

// Object.preventExtensions(bike);
// bike.rodas = 4;
// bike.aro = 15;
// delete bike.rodas
// console.log(bike);


// Verificando estados do Obj
// Object.isFrozen()
// Object.isExtensible()
// Object.isSealed()



// # Propriedades e métodos do Prototypo
// Retornando a função construtora do obj
// {}.constructor ou [].constructor ou ''.constructor

//Verificando se possui prop
//obj.hasOwnProperty('prop ou métod')

//Verificando se a prop é enumerable
Array.prototype.propertyIsEnumerable('map'); // false
window.propertyIsEnumerable('innerHeight'); // true

//Verificando se o obj é prototipo de outro obj
//Object.isPrototypeOf(obj)

// 