const numeros = [26, 14, 19, 32, 76, 91, 103]

function dividePorDoisPrimeiroEUltimo(array) {
    return { primeiro: array[0] / 2, ultimo: array[array.length - 1] / 2 }
}

console.log(dividePorDoisPrimeiroEUltimo(numeros))