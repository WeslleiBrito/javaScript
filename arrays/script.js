const listaFeira = ['Batata', 'Cenoura', 'Beterraba']

console.log('Segundo item da lista:', listaFeira[1])
console.log('Tamanho da lista:', listaFeira.length)
listaFeira.push('Mandioca')
console.log('Nova lista:', listaFeira)
console.log('Existe o item "Cenoura"?', listaFeira.includes('Cenoura'))
listaFeira.splice(0, 1)
console.log('Lista atualizada', listaFeira)