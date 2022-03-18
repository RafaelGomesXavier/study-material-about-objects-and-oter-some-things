function burro() {
  // Retorne a soma total de caracteres dos parágrafos acima utilizando reduce
  const paragrafos = document.querySelectorAll("p");
  const totalChar = Array.prototype.reduce.call(
    paragrafos,
    (acc, item) => {
      const leng = item.innerText.length;
      return acc + leng;
    },
    0
  );
  console.log(totalChar);
}
// burro();

// Crie uma funcção que retorne novos elementos html,
// com os seguintes parámetros
// tag, classe, conteudo.
// function createElements() {
  function criarElementos(tag, classe, conteudo) {
    const elemento = document.createElement(tag);
    classe ? elemento.classList.add(classe) : null;
    conteudo ? elemento.innerHTML = conteudo : null;
    return elemento;
}
console.log(criarElementos('li', 'azul', 'Esse é o conteudo'));
  // Crie uma nova função utilizando o anterior como base
  // essa nova função devera sempre criar h1
  // com classe titulo, porem o parametro conteudo continuará dinamico
const h1Titulo = criarElementos.bind(null, 'h1', 'titulo');
const porra = h1Titulo('conteudo do caralho que resolve funcionar quando quer');
console.log(porra);





// }
// createElements();
