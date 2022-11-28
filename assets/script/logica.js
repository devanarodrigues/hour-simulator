

let lugar = document.querySelector("#lugar")
let output = ['']
let idHorario = document.getElementsByClassName('horario')
let i = 0
let inputs = document.getElementById('inputs')
let idHorarioInput = document.getElementById('horario-input')
let idIntervalo = document.getElementById('intervalo')
let h2 = document.getElementById('h2')


function exibir() {
    lugar.classList.toggle('horario')
}

function limpar(){
    document.getElementById('lugar').innerHTML = ''
    document.getElementById('lugar').innerText = ''
    lugar.classList.toggle('horario')
    document.getElementById('inputs').style.display = 'flex'
    document.getElementById('btn-limpar').style.display = 'none'
    idHorarioInput.value = ''
    idHorarioInput.focus()
    idIntervalo.value = ''

}

function logica() {
    
    let intervalo = document.getElementById("intervalo").value;
    let horarioInicial = document.getElementById("horario-input").value;
    intervalo = +intervalo
    horarioInicial = +horarioInicial
    let i = 1
    var arrayHorarios = ['']
    var limpar = ''
    
    

    para()

    function para() {
            
            for (i; horarioInicial <= 23; i++) {
                arrayHorarios.push(horarioInicial)
                lugar.innerText += `${i}° Horário às ${parseInt(arrayHorarios[i])}h`
                lugar.innerHTML += "<br><br>"
                horarioInicial += intervalo;
            }

            document.getElementById('inputs').style.display = 'none'
            document.getElementById('btn-limpar').style.display = 'block'
    }
    
}
let contagem = 0

function abrirHelp(){
    let helpContent = document.getElementById('help-content')
    if (contagem % 2 == 0) {
        helpContent.style.display = 'block'
        document.getElementById('wrapper').classList.toggle('blur')
    }else{
        helpContent.style.display = 'none'
        document.getElementById('wrapper').classList.toggle('blur')
    }

    contagem++
}








