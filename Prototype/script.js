/*
clie uma função construtora de pessoas.
Deve conter nome, sobremone e idade
crie um metodo no prototipo que retorne
o nome completo da pessoa*/

function initPessoas(){
  function Pessoas(nome, sobrenome, idade) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.idade = idade;
  }
  Pessoas.prototype.nomeCompleto = function () {
    return `${this.nome} ${this.sobrenome}`
  }
  const rafael = new Pessoas('Rafael', 'Gomes xavier', 27);
  rafael.nomeCompleto();
}
/*
Liste os métodos acessados por
dados criados com NodeList,
HTMLCollection, Document:

NodeList: apply(), bind(), call(), toString()
HTMLCollection: apply(), bind(), call(), toString()
Document: apply(), bind(), call(), toString()
*/


/*
Liste os construtores dos dados abaixo
li = HtmlIElement()
li.click = Function()
li.innerText = String()
*/

const liq = document.querySelector('li');
const lit = document.getElementsByTagName('li');
const lia = document.querySelectorAll('li');
