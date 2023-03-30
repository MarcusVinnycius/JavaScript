function contar1() {

    resultado1.innerHTML = ``

    for (var cont = 0; cont <= 5; cont++) {
        resultado1.innerHTML += `Passo ${cont} <br>`
    }
}

function contar2() {
    var cont = 0

    resultado2.innerHTML = ``

    while (cont <= 5) {
        resultado2.innerHTML += `Passo ${cont} <br>`
        cont++
    }
}

function contar3() {

    var cont = 0

    resultado3.innerHTML = ``

    do {
        resultado3.innerHTML += `Passo ${cont} <br>`
        cont++
    } while (cont <= 5)

}