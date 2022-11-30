const fraseOriginal = ' Hoje vou comer cenoura, ebaaa '
const tamanhoFraseOriginal = fraseOriginal.length
console.log(`O tamanho da frase: "${fraseOriginal}" é`, tamanhoFraseOriginal)
let fraseSemEspacos = fraseOriginal.trim()
console.log(`Frase sem espaços no início e no fim: "${fraseSemEspacos}"`)
const fraseApenasLetrasMaiusculas = fraseSemEspacos.toLocaleUpperCase()
console.log(`Frase só letras maiúsculas: "${fraseApenasLetrasMaiusculas}"`)
let verificaComer = fraseSemEspacos.includes('comer') ? 'Possui' : 'Não possui'
console.log('Existe a paravra "comer"?:', verificaComer)
let verificaBatata = fraseSemEspacos.includes('batata') ? 'Possui' : 'Não possui'
console.log('Existe a paravra "batata"?:', verificaBatata)
fraseSemEspacos = fraseSemEspacos.replace('cenoura', 'batata')
verificaComer = fraseSemEspacos.includes('comer') ? 'Possui' : 'Não possui'
console.log('Existe a paravra "comer"?:', verificaComer)
verificaBatata = fraseSemEspacos.includes('batata') ? 'Possui' : 'Não possui'
console.log('Existe a paravra "batata"?:', verificaBatata)