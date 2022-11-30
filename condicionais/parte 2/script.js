
const nomeAnimal = prompt('Informe o nome do animal')

console.log('Usando switch case\n')

switch(nomeAnimal.toLowerCase()){

    case 'cachorro':
        console.log('Au au')
        break
    case 'gato':
        console.log('Miau')
        break
    case 'vaca':
        console.log('Muuu')
        break
    default:
        console.log('Sem barulho reconheicido :(')
}

console.log('Usando if/else\n')

if(nomeAnimal === 'cachorro'){
    console.log('Au au')
}else if(nomeAnimal === 'gato'){
    console.log('Miau')
}else if(nomeAnimal === 'vaca'){
    console.log('Muuu')
}else{
    console.log('Sem barulho reconhecido :(')
}
