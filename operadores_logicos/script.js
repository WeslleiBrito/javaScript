const idade = Number(prompt('Qual a sua idade?'))
const altura = Number(prompt('Qual a sua altura?').replace(',', '.'))
const problemaCardiaco = confirm('Possui problemas cardiacos? [Sim = OK] [Não = Cancelar]')

if (idade >= 18 && altura >= 1.60 && !problemaCardiaco) {
    console.log('Bem vindo ao nosso brinquedo mais radical')
} else {
    console.log('Você não possui os requisitos necessário para ir nesse brinquedo')
}