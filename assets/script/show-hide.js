
function exibir(){
    let logo = document.querySelector("#logo")
    let horario = document.querySelector("#horario")
    let lugar = document.querySelector("#lugar")
    lugar.classList.toggle('horario')
    // logo.classList.toggle('hide')
    // horario.classList.toggle('show'/*, remover()*/)
}

function remover(){
    horario.remove()
}
