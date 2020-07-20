"use strict";

//---уровень сложности 0---

// const startTimer = function() {
//   const timer = document.getElementById("timer");
//   if(timer.textContent > 0) {
//     (timer.textContent -= 1);
//   } else {
//     window.alert("ВЫ ПОБЕДИЛИ В КОНКУРСЕ!")
//   }
// }

// setInterval(startTimer, 1000);

//---уровень сложности 1---

function msToString(ms) {
    let seconds = (ms / 1000) % 60;
    let minutes = Math.floor(ms / 1000 / 60) % 60;
    let hours = Math.floor(ms / 1000 / 60 / 60);
    seconds = ('0' + seconds).slice(-2);
    minutes = ('0' + minutes).slice(-2);
    hours = ('0' + hours).slice(-2);
    return `${hours}:${minutes}:${seconds}`;
  }

const timer = document.getElementById("timer");
let numberTimer = 10000;
timer.textContent = msToString(numberTimer);
  
function startTimer() {
  numberTimer -= 1000;
  if (numberTimer > 0) {
    let stringTimer = msToString(numberTimer);
    timer.textContent = stringTimer;
  } else {
  window.alert("ВЫ ПОБЕДИЛИ В КОНКУРСЕ!")  
  }        
}
 
setInterval(startTimer, 1000);
  

