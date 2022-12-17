
// ====================== VÁRIAVEIS ===========================

let output = ['']
let i = 0
let contagem = 0
let lugar = document.querySelector("#lugar")
let idHorario = document.getElementsByClassName('horario')
let inputs = document.getElementById('inputs')
let idHorarioInput = document.getElementById('horario-input')
let idIntervalo = document.getElementById('intervalo')
let h2 = document.getElementById('h2')

// ----------- FOCUS EM INPUT ONLOAD -----------
window.onload = function () {
    idHorarioInput.focus();
}
// ======================= FUNÇÕES ================================
 
// ------- TOGGLE CONTAINER OUTPUT HORARIOS --------
function exibir() {
    lugar.classList.toggle('horario')
}

// ------- REMOÇÃO OUTPUT HORÁRIOS, LIMPAR E EXIBIR INPUTS --------
function limpar(){
    window.history.go(0)
    
//     document.getElementById('lugar').innerHTML = ''
//     document.getElementById('lugar').innerText = ''
//     lugar.classList.toggle('horario')
//     document.getElementById('inputs').style.display = 'flex'
//     document.getElementById('btn-limpar').style.display = 'none'
//     idHorarioInput.value = ''
//     idHorarioInput.focus()
//     idIntervalo.value = ''
    
}

// ------- MODAL HELP-CONTENT --------
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

// ------- FUNÇÃO DE CÁLCULOS --------
function logica() {
    
    let intervalo = document.getElementById("intervalo").value;
    let horarioInicial = document.getElementById("horario-input").value;
    intervalo = +intervalo
    horarioInicial = +horarioInicial
    let i = 1
    var arrayHorarios = ['']

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









