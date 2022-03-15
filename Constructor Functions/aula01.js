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


