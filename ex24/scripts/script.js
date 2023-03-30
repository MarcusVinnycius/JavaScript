var animal = 'Calango'
switch (animal) {
    case 'Vaca':
    case 'Girafa':
    case 'Cachorro':
    case 'Porco':
        console.log('Esse animal irá para a Arca de Noé')
        break
    case 'Dinossauro':
        console.log('Esse animal não vai para a Arca de Noé.')
        break
    default:
        console.log('Esse animal não existe.')
        break

}