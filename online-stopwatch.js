function startTimer(){
    window[0].exportRoot.scr_timer.grc_start.dispatchEvent("mousedown")
}

function setTimer(hour,minute){
    let interval = setInterval(()=>{
        let sound = new Audio('https://www.jothamhernandez.com/beep.mp3')
        sound.src = "https://cdn.videvo.net/videvo_files/audio/premium/audio0083/watermarked/ElectronicBeep%20PS01_62_1_preview.mp3";
        if((new Date()).getHours() == hour && (new Date()).getMinutes() == minute - 1 && (new Date()).getSeconds() >= 50){
            sound.play();
        }

        if((new Date()).getHours() == hour && (new Date()).getMinutes() == minute){
            startTimer();
            clearInterval(interval);
        }
    },1000)
}
