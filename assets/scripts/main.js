// ====== VARIABLES =====
// -> Timer
let pomodoro = 25;
let short = 5;
let long = 30;
let time = pomodoro * 60;
let cron = null;

// -> Display Timer
let displayPomodoro = document.querySelector("#timer");

// -> Theme
let theme = 'dark';


// ===== Functions Timer =====

// -> Update Timer
function updateTime() {
    let min = Math.floor(time / 60);
    let sec = time % 60;
    time > 0 ? time-- : time = 0

    min < 10? min = '0' + min : min = min 
    sec < 10? sec = '0' + sec : sec = sec 

    displayPomodoro.innerHTML = `${min}:${sec}` 
}
updateTime();





// ===== Functions Buttons =====
// -> Update Buttons "Disabled" / "Enabled"
function bttnClick(bttnEnable, bttnDisable){
    document.querySelector(bttnEnable).classList.remove("disabled");
    document.querySelector(bttnDisable).classList.add("disabled");
}

// -> Button PLAY
$("#playBttn").click(playPomodoro);

function playPomodoro(){
    bttnClick("#pauseBttn", "#playBttn")
    cron = setInterval(() => {
        if(time === 1){
            document.querySelector("#audioAlarm").play();
        }
        updateTime();
    }, 1000);
}

// -> Button PAUSE
$("#pauseBttn").click(() => {
    clearInterval(cron);
    bttnClick("#playBttn", "#pauseBttn");
})

// -> Button RESET
$("#resetBttn").click(() => {
    pomodoroOption();
})



// -> Pomodoro Options Button ("Pomodoro", "Short Break", "Long Break")
function pomodoroOption(){
    if(pomodoroBttn.checked){
        time = pomodoro * 60;
    }
    else if(shortBreakBttn.checked){
        time = short * 60;
    }
    else{
        time = long * 60;
    }
    updateTime();
}

// -> Click Event
$("#pomodoroBttn").click(pomodoroOption);

$("#shortBreakBttn").click(pomodoroOption);

$("#longBreakBttn").click(pomodoroOption); 





// ===== Pomodoro Custom Modal =====

function pomodoroCustom(){
    pomodoro = $("#pomodoroTime").val();
    short = $("#shortTime").val();
    long = $("#longTime").val();
    pomodoroOption();
}

// -> Default Button
function defaultPomodoroBttn(){
    $("#pomodoroTime").val(25)
    $("#shortTime").val(5)
    $("#longTime").val(30)
}

// -> Click Event
$("#defaultPomodoro").click(defaultPomodoroBttn)
$("#savePomodoro").click(pomodoroCustom);




// ===== DARK / LIGHT MODE =====

// -> Event Click Buttons
$("#themeBttn").click(() => {
    if(theme === 'dark'){
        theme = 'light';
        lightMode();
    }
    else{
        theme = 'dark';
        darkMode();
    }
})

function lightMode(){
    // Theme Button
    $("#themeIcon").attr("class", "bi bi-brightness-high-fill mx-1");
    $("#themeBttn > p").text("Light Mode");

    // Custom Button
    $("#customIcon").attr("class", "bi bi-gear-fill mx-1");

    // Logo
    $("#logo > span").css("color", "black");

    // Body / Nav
    $("body").attr("class", "bg-light");
    $("nav").removeClass("navbar-dark");
    
    // Modal
    $("#modalContent").removeClass("bg-dark text-light").addClass("bg-light text-dark");
    $(".modal-header > button").removeClass("btn-close-white");
}

function darkMode(){
    // Theme Button
    $("#themeIcon").attr("class", "bi bi-moon mx-1 mx-1");
    $("#themeBttn > p").text("Dark Mode");

    // Custom Button
    $("#customIcon").attr("class", "bi bi-gear mx-1");

    // Logo
    $("#logo > span").css("color", "white");

    // Body / Nav
    $("body").attr("class", "bg-dark");
    $("nav").addClass("navbar-dark");

    // Modal
    $("#modalContent").removeClass("bg-light text-dark").addClass("bg-dark text-light");
    $(".modal-header > button").addClass("btn-close-white");
}



