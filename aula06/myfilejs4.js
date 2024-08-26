

var produto = window.prompt('Qual é o produto?')
var preco = Number(window.prompt('Qual é o preço?'))
var preco = preco.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
document.write(`Produto ${produto} no valor de ${preco} cadastrado com sucesso!`)
