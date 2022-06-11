//comentário com uma linha
/*comentário de várias linhas*/

let pratoClicado
let bebidaClicado
let sobremesaClicado

function pratoSelector(element) {
  pratoClicado = element.innerHTML

  let cardClicado = document.querySelector('.prato .selected')
  if (cardClicado !== null) {
    cardClicado.classList.remove('selected')
  }

  element.classList.add('selected')

  fecharPedido()
}

function bebidaSelector(element) {
  bebidaClicado = element.innerHTML

  let cardClicado = document.querySelector('.bebida .selected')
  if (cardClicado !== null) {
    cardClicado.classList.remove('selected')
  }

  element.classList.add('selected')

  fecharPedido()
}

function sobremesaSelector(element) {
  sobremesaClicado = element.innerHTML

  let cardClicado = document.querySelector('.sobremesa .selected')
  if (cardClicado !== null) {
    cardClicado.classList.remove('selected')
  }

  element.classList.add('selected')

  fecharPedido()
}

function fecharPedido() {
  if (pratoClicado && bebidaClicado && sobremesaClicado) {
    document.querySelector('.botao').classList.add('ativo')
  }
}
