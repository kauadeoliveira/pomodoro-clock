let startTiming = 0.1;  // Aqui é o tempo em que o cronometro vai durar. Tipo, se  for 10, o cronometro durará 10 minutos.
let time = startTiming * 60; // Aqui transformamos o "startTiming" em SEGUNDOS. Ex: 10 minutos = 10*60 => 600 segundos.

let displayPomodoro = document.querySelector("#timer"); //Aqui selecionamos o elemento em que vamos escrever os minutos e os segundos. Nesse caso é uma Div onde vamos acrescentar texto logo mais.


let cron = null;


function updateTime() {
    let min = Math.floor(time / 60) // Aqui passamos de segundos para Minutos o tempo do pomodoro. Time anteriormente estava em segundos, agora transformamos em minutos.
    let sec = time % 60 // O resto da divisão entre o "time" e 60 sempre será a quantidade de segundos.

    time > 0 ? time-- : time = 0



    min < 10? min = '0' + min : min = min // Se o minuto(min) atual for menor que 10, adicione o "0" na frente. Mas se for maior ou igual a 10, remova esse "0" da frente.
    sec < 10? sec = '0' + sec : sec = sec // Se o segundo(sec) atual for menor que 10, adicione o "0" ma frente. Mas se for maior ou igual a 10, remova esse "0" da frente.

    displayPomodoro.innerHTML = `${min}:${sec}` // Escrevendo os minutos e segundos no elemento display.

    // OBS: Toda vez em que essa função for chamada ela vai refazer o calculo de min e de sec baseado no valor atual da variavel "time"
}

function bttnClick(bttnEnable, bttnDisable){
    document.querySelector(bttnEnable).classList.remove("disabled")
    document.querySelector(bttnDisable).classList.add("disabled")
}


// CLICK PLAY
$("#playBttn").click(() => {
    bttnClick("#pauseBttn", "#playBttn")
    cron = setInterval(() => {
        if(time == 1){
            document.querySelector("audio").play()
        }
        updateTime()
    }, 1000)
    
})


// CLICK PAUSE
$("#pauseBttn").click(() => {
    clearInterval(cron)
    bttnClick("#playBttn", "#pauseBttn")
})


//CLICK RESET
$("#resetBttn").click(() => {
    time = startTiming * 60
})


// ALERT MUSIC
