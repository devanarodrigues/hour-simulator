

let lugar = document.querySelector("#lugar")
let output = ['']
let idHorario = document.getElementsByClassName('horario')
let i = 0

function exibir() {
    lugar.classList.toggle('horario')
}

function logica() {
    let intervalo = document.getElementById("intervalo").value;
    let horarioInicial = document.getElementById("horario-input").value;
    intervalo = +intervalo
    horarioInicial = +horarioInicial
    let cont = 1

    function para() {
        paraInterno()
        function paraInterno() {
            output = ''
            for (cont; horarioInicial <= 23; cont++) {
                output = [`${cont}° horário às ${horarioInicial}h`]
                horarioInicial += intervalo;
                this.i++

                console.log(lugar.innerHTML += `<p>${output[i]}<br><p>`)
                if (i != i) {
                    lugar.innerHTML = output[i]
                }
            }
        }

        while (horarioInicial <= 23) {
            paraInterno()
        }
    }

    return para()

}








