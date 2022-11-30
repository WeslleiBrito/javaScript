const numeros = [15, 36, 1, 7, 2, 27, 75, 18]
let maiorNumeroFor
let maiorNumeroIn
let maiorNumeroOf

// Metodo simplificado
const numerosOrdenados = numeros.sort((a, b)=> a - b)
console.log('O maior número é [Método simplificado]:', numerosOrdenados[numerosOrdenados.length - 1])

// For 
for(let i = 0; i < numeros.length; i++){
    if(i === 0){
        maiorNumeroFor = numeros[i]
    }else{
        if(maiorNumeroFor < numeros[i]){
            maiorNumeroFor = numeros[i]
        }
    }
}

console.log('O maior número é [Método For padrão]:', maiorNumeroFor)

// For in

for(let i in numeros){

    if(i == 0){
        maiorNumeroIn = numeros[i]
    }else{
        if(maiorNumeroIn < numeros[i]){
            maiorNumeroIn = numeros[i]
        }
    }
}

console.log('O maior número é [Método For in]:', maiorNumeroIn)

// For of

for(i of numeros){
    
    if(numeros.indexOf(i) === 0){
        maiorNumeroOf = i
    }else{
        if(maiorNumeroOf < i){
            maiorNumeroOf = i
        }
    }
}

console.log('O maior número é [Método For of]:', maiorNumeroOf)