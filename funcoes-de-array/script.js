const produtos = [
    {nome: 'Alface lavada', categoria: 'Hortfruti', preco: 2.50},
    {nome: 'Guaraná 2l', categoria: 'Bebidas', preco: 7.80},
    {nome: 'Veja Multiuso', categoria: 'Limpeza', preco: 12.60},
    {nome: 'Dúzia de Banana', categoria: 'Hortfruti', preco: 5.70},
    {nome: 'Leite', categoria: 'Bebidas', preco: 2.99},
    {nome: 'Cândida', categoria: 'Limpeza', preco: 3.30},
    {nome: 'Detergente Ypê', categoria: 'Limpeza', preco: 2.20},
    {nome: 'Vinho Tinto', categoria: 'Bebidas', preco: 55.00},
    {nome: 'Berinjela Kg', categoria: 'Hortfruti', preco: 8.99},
    {nome: 'Sabão em pó', categoria: 'Limpeza', preco: 10.80},
]

const produtosCom10PorcentoDeDesconto = produtos.map((objeto) => {return {...objeto, preco: objeto.preco * 0.9}})
console.log('Todos os produtos com 10% de desconto:\n', produtosCom10PorcentoDeDesconto)
const apenasCategoriaHortfruti = produtos.filter((objeto) => objeto.categoria === 'Hortfruti')
console.log('Apenas produtos da categoria hortfruti:\n', apenasCategoriaHortfruti)
const hortfrutiCom10PorcentoDeDesconto = apenasCategoriaHortfruti.map((objeto) => {return {...objeto, preco: objeto.preco * 0.9}})
console.log('Apenas hortfruti com 10% de desconto:\n', hortfrutiCom10PorcentoDeDesconto)