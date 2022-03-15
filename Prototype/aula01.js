// const Dom = {
//   seletor: 'ul',
//   element() {
//     return document.querySelector(this.seletor);
//   },
//   ativar() {
//     return this.element().classList.add('ativar');
//   }
// }

// Dom.seletor = 'script';
// Dom.ativar();


function Dom(seletor) {
  this.element = function() {
    return document.querySelector(seletor)
  }
  this.ativar = function(className) {
    this.element().classList.add(className);
  }
}


const pessoa = {
  nome: 'Nome pessoa',
  idade:  0,
  andar() {
    console.log(this.nome = ' andou');
  }
}

function Pessoa() {
  this.nome = 'Nome pessoa';
  this.idade = 0;
  this.andar = function() {
    console.log(this.nome = ' andou');
  }
}

const joao = new Pessoa();
const maria = new Pessoa();
const bruno = new Pessoa();

function Dom(seletor) {
  const elementList = document.querySelectorAll(seletor)
  this.element = elementList;
  this.addClass = function(classe) {
    elementList.forEach((element)=>{
      element.classList.add(classe);
    });
  }
  this.removeClass = function(classe) {
    elementList.forEach((element)=>{
      element.classList.remove(classe)
    });
  }
}

const li = new Dom('li');
li.addClass('Ativação');
li.removeClass('Ativação')



const carro ={
  marca: 'Ford',
  preco: 2000,
  andar() {
    return true
  }
}