

 let output = ['']
 let idHorario = document.getElementById('horario')
 let i = 0

 function logica() {
    let intervalo = document.getElementById("intervalo").value;
    let horarioInicial = document.getElementById("horario-input").value;
    intervalo = +intervalo
    horarioInicial = +horarioInicial
    let cont = 1

    function para() {
        paraInterno()
        function paraInterno() {
            for (cont; horarioInicial <= 23; cont++) {
                output = [`${cont}° horário às ${horarioInicial}h`]
                horarioInicial += intervalo;
                this.i++

                idHorario.innerHTML +=`<p>${output[i]}<p>`
                if (i != i) {
                    idHorario.innerHTML = output[i]
                }
            }
        }

        while (horarioInicial <= 23) {
            paraInterno()
        }
    }

    return para()

}








