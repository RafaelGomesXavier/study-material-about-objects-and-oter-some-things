const comidas = Array("Pizza", "Frango", "Carne", "Macarrão");
// Remova o primeir valor de comidas e coloque em uma variavel
const primeiroValor = comidas.shift();
console.log(primeiroValor);

// Remova o último valor de comidas e coloque em uma variavel
const ultimoValor = comidas.pop();
console.log(ultimoValor);
// Adicione 'Arroz' ao final do array
comidas.push("Arroz");
// Adicione 'Peixe' e 'Batata' ao inicio do array
comidas.unshift("Peixe", "Batatas");
console.log(comidas);

const estudantes = Array("Marcio", "Brenda", "Joana", "Kleber", "Julia");
// Arrume os estudantes em ordem alfabetica
estudantes.sort();
// Inverta a ordem dos estudantes
estudantes.reverse();
// Verifique se Joana faz parte dos estudantes
console.log(estudantes.includes("Joana"));

// Verifique se Juliana faz parte dos estudantes
console.log(estudantes.includes("Juliana"));
console.log(estudantes);

let html1 = `<section>
                <div>Sobre</div>
                <div>Protudo</div>
                <div>Contato</div>
              </section>`;
// Subistitua section por ul e div com li
// Utilizando split e join
html1 = html1.split("section").join("ul").split("div").join("li");
console.log(html1);

const carros = Array("Ford", "Fiat", "Vw", "Honda");
// Remova o último carro, mas antes de remover salve o arry original em outra variavel
const carrosClone = carros.slice();
carros.pop();
console.log(carros);
console.log(carrosClone);
/*
Utilizando o forEach na array abaixo,
some os valores de taxa e os valores de Recebimento
*/
const transacoes = [
  {
    descricao: "Taxa do Pão",
    valor: "R$ 39",
  },
  {
    descricao: "Taxa do Mercado",
    valor: "R$ 129",
  },
  {
    descricao: "Recebimento do Cliente",
    valor: "R$ 99",
  },
  {
    descricao: "Taxa do Banco",
    valor: "R$ 129",
  },
  {
    descricao: "Recebimento do Cliente",
    valor: "R$ 49",
  },
];

let totalTaxas = 0;
transacoes.forEach((taxa) => {
  const filtro = taxa.descricao.substring(0, 4).toLowerCase();
  const valorLimpo = +taxa.valor.replace("R$", "").trim();
  filtro === "taxa" ? (totalTaxas += valorLimpo) : "";
});
console.log(totalTaxas);

// Retorne um array com a lista abaixo
const transportes = "Carro;Avião;Trem;Ônibus;Bicicleta";
const listaTransportes = transportes.split(";");
console.log(listaTransportes);

// Subistitua todo os span's por a's
let html2 = `<ul>
  <li><span>Sobre</span></li>
  <li><span>Produtos</span></li>
  <li><span>Contato</span></li>
</ul>`;
html2 = html2.split("span").join("a");
console.log(html2);

// Retorne o último caracter de frase
const frase = "Melhor do ano!";
console.log(frase.slice(-1));

// Retorne o total de taxas
const transacoes2 = [
  "Taxa do Banco",
  "  TAXA DO PÃO",
  "  taxa do mercado",
  "depósito Banário",
  "TARIFA especial",
];

const taxas = transacoes2.reduce((acc, item) => {
  const filtroTaxa = item.trim().toLowerCase().substring(0, 4);
  filtroTaxa === "taxa" ? acc++ : null;
  return acc;
}, 0);
console.log(taxas);

// Retorne um número aleatório
// entre 1050 e 2000
const aleatorio = Math.floor(Math.random() * (2000 - 1050 + 1) + 1050);
console.log(aleatorio);

// Retorne o maior número da lista abaixo
const numeros1 = "4, 5, 20, 8, 9";
const numeroLimpo  = numeros1.split(', ').reduce((acc, item) => {
  if(acc > item) return item
  else return acc
});
console.log(numeroLimpo);

// Crie uma função para limpar os preços
// e retornar os números com centavos arredondados
// depois retorne a soma total

const listaPrecos = ["R$ 59,99", " R$ 200,222", "R$ 230   ", "r$ 200"];

function limparValor() {
  let valor = 0;
  const maps = listaPrecos.map((item, index) => {
    const valorLimpo = +item
      .toUpperCase()
      .replace("R$", "")
      .trim()
      .replace(",", ".");
    valor += +valorLimpo.toFixed(2);
  });
  console.log(valor);
  return listaPrecos;
}
limparValor();
const original = listaPrecos.slice();

const maiorPreco = original.reduce((acc, item) => {
    let itemLimpo = +item.toUpperCase().replace('R$','').trim().replace(',','.')
    itemLimpo = itemLimpo;

    if(acc > itemLimpo) return acc
    else return itemLimpo
},0)
console.log(maiorPreco)



/*
clie uma função construtora de pessoas.
Deve conter nome, sobremone e idade
crie um metodo no prototipo que retorne
o nome completo da pessoa*/

function Pessoas(nome, sobrenome, idade) {
  this.nome = nome;
  this.sobrenome = sobrenome;
  this.idade = idade;
}
Pessoas.prototype.nomeCompleto = function () {
  return `${this.nome} ${this.sobrenome}`;
};
const rafael = new Pessoas("Rafael", "Gomes Xavier", 27);
const nomeCompleto = rafael.nomeCompleto();
console.log(nomeCompleto);

// Liste os métodos acessados por
// dados criados com NodeList,
// HTMLCollection, Document:

// console.log(Document.prototype.)
/*
NodeList: entries, forEach, item, keys e value
HTMLCollection: item e namedItem
Document: muitos....
*/

const li = document.querySelector("li");
// Liste os construtores dos dados abaixo
// li = HTMLLIElement()
// li.click = Function()
// li.innerText = String()

// Liste 5 objetos Nativos do JavaScript
// Object, String, Number, Array, Function
// -----------
// Liste 5 objetos Nativos do Brownser
// Window, Document, HTMLCollection, NodeList, Selection
// ----------
// Liste 2 métodos, Propriedades ou Objetos
// presentes no Chrome que não existem no Firefox

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
    return console.log(`${this.nome} andou`);
  };
}
const rafaelG = new Pessoa("Rafael", 27);
rafaelG.andar();

// Crie 3 pessoas, João - 20 anos,
// Maria - 25 anos, Bruno - 15 anos.

const joao = new Pessoa("João", 20);
const maria = new Pessoa("Maria", 25);
const bruno = new Pessoa("Bruno", 15);
joao.andar();
maria.andar();
bruno.andar();

// Crie uma Constructor Function (Dom) para manipulação
// de listas de elementos dom. Deve conter as seguintes propriedades e método:
//
// elements, retorna NodeList com os elementos selecionados
//addClass(classe), adiciona a classe a todos os elementos
// removeClass(classe), remove a classe a todos os elementos.

function Dom(tag) {
  this.elementos = document.querySelectorAll(tag);
  const elementList = this.elementos;
  this.ativar = function (classe) {
    elementList.forEach((item) => {
      item.classList.add(classe);
    });
  };
  this.remover = function (classe) {
    elementList.forEach((item) => {
      item.classList.remove(classe);
    });
  };

  console.log(elementList);
}

const lista = new Dom("li");
lista.ativar("caralho");
lista.remover("caralho");

// Selecione cada curso e retorne um array
// com objetos contendo o titulo, descrição
// aulas e horas de cada curso.

const cursos = document.querySelectorAll(".curso");

const cursoArray = Array.prototype.map.call(cursos, (item) => {
  const titulo = item.querySelector(".titulo").innerText;
  const descricao = item.querySelector(".descricao").innerText;
  const aulas = item.querySelector(".aulas").innerText;
  const horas = item.querySelector(".horas").innerText;

  return {
    titulo,
    descricao,
    aulas,
    horas,
  };
});
console.log(cursoArray);

// Retorne uma lista com os números maiores que 180
const numeros2 = [3, 44, 333, 23, 122, 322, 33];
const numeroFiltrado = numeros2.filter((n) => {
  return n > 180;
});
console.log(numeroFiltrado);

// Verifique se Baixo faz parte
// da lista de instrumentos e retorne true
const instrumentos = ["Gitarra", "Baixo", "Bateria", "Teclado"];
const hasBaixo = instrumentos.some((item) => {
  return item === "Baixo";
});
console.log(hasBaixo);

// Retorne o valor total das comprar
const compras = [
  {
    item: "Banana",
    preco: "R$ 4,99",
  },
  {
    item: "Ovo",
    preco: "R$ 2,99",
  },
  {
    item: "Carne",
    preco: "R$ 25,49",
  },
  {
    item: "Refrigerante",
    preco: "R$ 5,35",
  },
  {
    item: "Queijo",
    preco: "R$ 10,60",
  },
];

const totalCompras = compras.reduce((acc, item) => {
  const valorLimpo = +item.preco.replace("R$", "").replace(",", ".").trim();

  return (acc += valorLimpo);
}, 0);
console.log(totalCompras);

// Selecione cada curso e retorne um array
// com objetos contendo o titulo, descrição
// aulas e horas de cada curso.

const cadaCurso = document.querySelectorAll(".curso");
const todosCursos = Array.prototype.map.call(cadaCurso, (item) => {
  const titulo = item.querySelector(".titulo").innerText;
  const descricao = item.querySelector(".descricao").innerText;
  const aulas = item.querySelector(".aulas").innerText;
  const horas = item.querySelector(".horas").innerText;

  return {
    titulo,
    descricao,
    aulas,
    horas,
  };
});
console.log(todosCursos);

// Retorne a soma total de caracteres dos parágrafos acima utilizando reduce

const selectParagraphs = document.querySelectorAll(".paragrafos p");
const todosParagrafos = Array.prototype.reduce.call(
  selectParagraphs,
  (acc, item) => {
    return (acc += item.innerText.length);
  },
  0
);
console.log(todosParagrafos);

// Crie uma funcção que retorne novos elementos html,
// com os seguintes parámetros
// tag, classe, conteudo.

function novosElementos(tag, classe, conteudo) {
  const elemento = document.createElement(tag);
  classe ? elemento.classList.add(classe) : null;
  conteudo ? (elemento.innerText = conteudo) : null;

  return console.log(elemento);
}

novosElementos("h2", "ativo", "esse é o conteudo");
const aaaa = novosElementos.bind(null, "h1", "titulo");

aaaa("Salve");

// Crie uma nova função utilizando o anterior como base
// essa nova função devera sempre criar h1
// com classe titulo, porem o parametro conteudo continuará dinamico
