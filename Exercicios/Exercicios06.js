// transforme o objeto abaixo em uma Constructor Function
// const pessoa = {
//   nome: 'Nome pessoa',
//   idade: 0,
//   andar() {
//     console.log(this.nome + ' andou');
//   }
// }

function Pessoa(nome, idade) {
  this.nome = nome;
  this.idade = idade;
  this.andar = function () {
    return `${this.nome} andou`; 
  }
}

// Crie 3 pessoas, João - 20 anos,
// Maria - 25 anos, Bruno - 15 anos.

const Joao = new Pessoa('João', 20);
const Maria = new Pessoa('Maria', 25);
const Bruno = new Pessoa('Bruno', 15);
console.log(Joao.andar());
console.log(Maria.andar());
console.log(Bruno.andar());

// Crie uma Constructor Function (Dom) para manipulação
// de listas de elementos dom. Deve conter as seguintes propriedades e método:
//
// elements, retorna NodeList com os elementos selecionados
//addClass(classe), adiciona a classe a todos os elementos
// removeClass(classe), remove a classe a todos os elementos.





function Dom(select) {
  const elementList = document.querySelectorAll(select);
  this.elements = elementList;
  this.addClass = function(classe) {
    elementList.forEach((elemento) => {
      elemento.classList.add(classe)
    })
  }
  this.removeClass = function(classe) {
    elementList.forEach((elemento) => {
      elemento.classList.remove(classe);
    })
  }
}

const li = new Dom('li');
