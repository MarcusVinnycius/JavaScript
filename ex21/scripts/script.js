var idade = 18
var doença = 'Não'
var peso = 55

if (idade >= 18) {
    if (doença == 'Não') {
        if (peso >= 55) {
            if (tatuagem == 'Não') {
                console.log('Você pode doar sangue.')
            }
        } else{
            console.log('Magro!')
        }
    } else {
        console.log('Você não pode doar sangue, pois está doente.')
    }
} else {
    console.log('Você não tem idade para doar sangue.')
}