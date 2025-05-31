const initialize = document.getElementById("initialize");
const pause = document.getElementById("pause");
const restart = document.getElementById("restart");
const time = document.getElementById("time");

let segundos = 0;
let minutos = 0;
let horas = 0;
let intervalID = null;
let isPaused = false;
// função que formata a unidade de tempo
function formatTime (unidade) {
    return unidade < 10 ? '0' + unidade : unidade; 
}
// lógica do cronômetro
function tick() {

    segundos++

    if (segundos >= 60) {
        minutos++;
        segundos = 0;
            if (minutos >= 60) {
                horas++;
                minutos = 0;
            }
    }

    time.innerText = `${formatTime(horas)}:${formatTime(minutos)}:${formatTime(segundos)}`
 }

// função para reiniciar
function reiniciar() {
    horas = 0;
    minutos = 0;
    segundos = 0;
    isPaused = false;

    time.innerText = "00:00:00";
}

// função de pause e despause
function pausar() {
    if (intervalID === null && isPaused === true) {
         intervalID = setInterval(tick, 1000);
        pause.innerText = 'Pausar';
        isPaused = false;
    } else {
        clearInterval(intervalID);
        intervalID = null;
        pause.innerText = 'Retomar';
        isPaused = true;
    }
}

// função para iniciar o cronômetro
function iniciar() {
     if (intervalID === null && isPaused === false) {
    intervalID = setInterval(tick, 1000);
    pause.innerText = 'Pausar';
    }
}

initialize.addEventListener('click', iniciar); // ao clicar no botão initialize, a função iniciar é acionada
pause.addEventListener('click', pausar); // ao clicar no botão pause, a função pausar é acionada
restart.addEventListener('click', reiniciar); // ao clicar no botão restart, a função reiniciar é acionada