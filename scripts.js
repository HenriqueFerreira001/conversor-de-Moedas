let botao = document.getElementById("botao")
let input = document.getElementById("input")
let origem = document.getElementById("origem")
let destino = document.getElementById("destino")

botao.addEventListener('click', converter)

function converter() {

    if ( origem.value == "Real" && destino.value == "Dólar"){
        alert(input.value / 5.8)

    } else if ( origem.value == 'Dólar' && destino.value == 'Real'){
        alert(input.value * 5.8)

    } else if (origem.value == destino.value) {
        alert(input.value)
    }

}
