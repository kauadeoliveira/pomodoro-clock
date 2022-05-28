let time = 25 * 60
let displayPomodoro = document.querySelector("#timer");
let cron = null;



function updateTime() {
    let min = Math.floor(time / 60) 
    let sec = time % 60 
    time > 0 ? time-- : time = 0



    min < 10? min = '0' + min : min = min 
    sec < 10? sec = '0' + sec : sec = sec 

    displayPomodoro.innerHTML = `${min}:${sec}` 

}
updateTime()

function bttnClick(bttnEnable, bttnDisable){
    document.querySelector(bttnEnable).classList.remove("disabled")
    document.querySelector(bttnDisable).classList.add("disabled")
}


// CLICK PLAY
$("#playBttn").click(playPomodoro)

function playPomodoro(){
    bttnClick("#pauseBttn", "#playBttn")
    cron = setInterval(() => {
        if(time === 1){
            document.querySelector("#audioAlarm").play()
        }
        updateTime()
    }, 1000)
}


// CLICK PAUSE
$("#pauseBttn").click(() => {
    clearInterval(cron)
    bttnClick("#playBttn", "#pauseBttn")
})


//CLICK RESET
$("#resetBttn").click(() => {
    pomodoroOption()
})


$("#pomodoroBttn").click(pomodoroOption)

$("#shortBreakBttn").click(pomodoroOption)

$("#longBreakBttn").click(pomodoroOption) 


function pomodoroOption(){
    if(pomodoroBttn.checked){
        time = 25 * 60
    }
    else if(shortBreakBttn.checked){
        time = 5 * 60
    }
    else{
        time = 30 * 60
    }
    updateTime()
}