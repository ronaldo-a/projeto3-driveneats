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
    document.querySelector('.prato .checkyes').classList.remove('checkyes')
  }

  element.classList.add('selected')
  document.querySelector('.prato .selected .check').classList.add('checkyes')

  fecharPedido()
}

function bebidaSelector(element) {
  bebidaClicado = element.innerHTML

  let cardClicado = document.querySelector('.bebida .selected')
  if (cardClicado !== null) {
    cardClicado.classList.remove('selected')
    document.querySelector('.bebida .checkyes').classList.remove('checkyes')
  }

  element.classList.add('selected')
  document.querySelector('.bebida .selected .check').classList.add('checkyes')

  fecharPedido()
}

function sobremesaSelector(element) {
  sobremesaClicado = element.innerHTML

  let cardClicado = document.querySelector('.sobremesa .selected')
  if (cardClicado !== null) {
    cardClicado.classList.remove('selected')
    document.querySelector('.sobremesa .checkyes').classList.remove('checkyes')
  }

  element.classList.add('selected')
  document
    .querySelector('.sobremesa .selected .check')
    .classList.add('checkyes')

  fecharPedido()
}

function fecharPedido() {
  if (pratoClicado && bebidaClicado && sobremesaClicado) {
    document.querySelector('.botao').classList.add('ativo')
    document.querySelector('.botao p').innerHTML = 'Fechar pedido'
  }
}

function enviarPedido() {
  let prato = document.querySelector('.prato .selected h4').innerHTML
  let bebida = document.querySelector('.bebida .selected h4').innerHTML
  let sobremesa = document.querySelector('.sobremesa .selected h4').innerHTML

  let pratoPreco = document.querySelector('.prato .selected .preco').innerHTML
  let bebidaPreco = document.querySelector('.bebida .selected .preco').innerHTML
  let sobremesaPreco = document.querySelector(
    '.sobremesa .selected .preco'
  ).innerHTML

  let pratoPrecoNum = pratoPreco.replace('R$', '')
  pratoPrecoNum = Number(pratoPrecoNum.replace(',', '.'))
  let bebidaPrecoNum = bebidaPreco.replace('R$', '')
  bebidaPrecoNum = Number(bebidaPrecoNum.replace(',', '.'))
  let sobremesaPrecoNum = sobremesaPreco.replace('R$', '')
  sobremesaPrecoNum = Number(sobremesaPrecoNum.replace(',', '.'))
  let preco = pratoPrecoNum + bebidaPrecoNum + sobremesaPrecoNum
  preco = preco.toFixed(2)

  let text = `Olá, gostaria de fazer o pedido:
  - Prato: ${prato}
  - Bebida: ${bebida}
  - Sobremesa: ${sobremesa}
Total: R$ ${preco}`

  let msg = encodeURIComponent(text)
  msg = 'https://wa.me/5584981649145?text=' + msg

  document.querySelector('a').setAttribute('href', msg)
}
