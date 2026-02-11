const min=document.getElementById("minutes");
const sec=document.getElementById("seconds");
const start=document.getElementById("startBtn");
const pause=document.getElementById("stopBtn");
const reset=document.getElementById("resetBtn"); 
let timeleft=1500;
let interval;

function updateTimer(){
    const minutes=Math.floor(timeleft/60);
    const seconds=timeleft%60;
    min.innerHTML=minutes.toString().padStart(2,"0")   ;
    sec.innerHTML=seconds.toString().padStart(2,"0")  ;   

    

}    
const startTimer=()=>{
   
    interval=setInterval(()=>{
        timeleft--;
        updateTimer();
        if(timeleft==0){
            clearInterval(interval);
            alert("Time's up!");
            timeleft=1500;
            updateTimer();
        }   
        
    },1000);
}   
const pauseTimer=()=> clearInterval(interval);          
const resetTimer=()=>{
    clearInterval(interval);
    timeleft=1500;
    updateTimer();
}
start.addEventListener("click",startTimer);
pause.addEventListener("click",pauseTimer);
reset.addEventListener("click",resetTimer);
updateTimer();                       
