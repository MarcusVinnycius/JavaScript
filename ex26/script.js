function verificar() {
    var numero = Number.parseInt(window.prompt(`Digite um número ?`))  

    var resto = numero % 2

    switch (resto){
        case 0:
            resultado.innerHTML = `<p> O numero ${numero} é par.</p>`
            break
        case 1:
            resultado.innerHTML = `<p> O numero ${numero} é ímpar.</p>`
            break
    }
}