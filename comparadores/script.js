
const numeroUsuario = Number(prompt('Informe seu número da sorte'))
const numeroAleatório = parseInt(Math.random() * 10)

if(numeroUsuario === numeroAleatório){
    console.log('Parabéns, você acertou o número secreto')
}else if(numeroUsuario > numeroAleatório){
    console.log('Tente novamente, o valor que você digitou é MAIOR que o número secréto')
}else{
    console.log('Tente novamente, o valor que você digitou é MENOR que o número secréto')
}

console.log('Número sorteado:', numeroAleatório)