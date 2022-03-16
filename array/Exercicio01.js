const comidas = Array('Pizza', 'Frango', 'Carne', 'Macarrão');
// Remova o primeir valor de comidas e coloque em uma variavel
const primeiraComida = comidas.shift();
console.log(primeiraComida);
// Remova o último valor de comidas e coloque em uma variavel
const ultimaComida = comidas.pop();
console.log(ultimaComida);
// Adicione 'Arroz' ao final do array
comidas.push('Arroz');
// Adicione 'Peixe' e 'Batata' ao inicio do array
comidas.unshift('Peixe', 'Batatas');
console.log(comidas);

const estudantes = Array('Marcio', 'Brenda', 'Joana', 'Kleber', 'Julia');
// Arrume os estudantes em ordem alfabetica
estudantes.sort();
// Inverta a ordem dos estudantes
estudantes.reverse()
// Verifique se Joana faz parte dos estudantes
console.log(estudantes.includes('Joana'));
// Verifique se Juliana faz parte dos estudantes
console.log(estudantes.includes('Juliana'));
console.log(estudantes);

let html = `<section>
                <div>Sobre</div>
                <div>Protudo</div>
                <div>Contato</div>
              </section>`
// Subistitua section por ul e div com li
// Utilizando split e join
html = html.split('section').join('ul').split('div').join('li');
console.log(html);

const carros = Array('Ford', 'Fiat', 'Vw', 'Honda');
// Remova o último carro, mas antes de remover salve o arry original em outra variavel
const original = carros.slice()
carros.pop();
console.log(carros)
console.log(original)