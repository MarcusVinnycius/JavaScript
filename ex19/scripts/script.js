function verificar() {
    var numero = Number.parseInt(window.prompt(`Qual o numero ?`))  

    if (numero % 2 == 0){
        document.getElementById("resultado").innerHTML = `<p> O numero ${numero} é par</p>`
    } else {
        document.getElementById("resultado").innerHTML =  `<p>O numero ${numero} é ímpar</p>`
    }
}