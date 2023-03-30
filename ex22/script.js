function maior() {
    var numero_1 = Number(document.getElementById('number1').value)
    var numero_2 = Number(document.getElementById('number2').value)
    var numero_3 = Number(document.getElementById('number3').value)

    var maior = numero_1

    if (numero_1 == numero_2 && numero_1 == numero_3) {
        resultado.innerHTML = `<p>Os números são iguais.</p>`
    } else {
        if (numero_2 > maior && numero_2 > numero_3) {
                maior = numero_2
        } else if(numero_3 > maior){
            maior = numero_3
        }
            resultado.innerHTML = `<p>O maior número é o ${maior}</p>`
     }
    }
