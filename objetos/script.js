
const prof = {
    nome: 'Letícia Chijo',
    idade: 27,
    aulasFront: true,
    aulasBack: false,
    jogosFavoritos: ['Chrono Trigger', 'Undertale', 'Hollow Knight'],
    contaPiada: () => console.log('É pavê ou pacumê?'),
    pet: {
        nome: 'Poly',
        especie: 'cachorrinha',
        raca: 'Lhasa Apso',
        snacksFavoritos: ['biscoito', 'maçã', 'frango']
    }
}

console.log(`Oi! Eu me chamo ${prof.nome} e tenho ${prof.idade} anos.\n${prof.aulasFront ? 'dou' : 'não dou'} aula de front e ${prof.aulasBack ? 'dou' : 'não dou'} aula de back.`)

console.log('Meus jogos favoritos são:')

for(i in prof.jogosFavoritos){
    console.log(`${Number(i) + 1}) ${prof.jogosFavoritos[i]}`)
}

console.log(`Tenho uma cachorrinha chamada ${prof.pet.nome} que gosta de comer ${prof.pet.snacksFavoritos[1]}`)

prof.contaPiada()