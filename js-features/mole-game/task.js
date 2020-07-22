"use strict";

//Вопросы, заданные в момент отправки, уже неактуальны. Разобралась )

const deadCounter = document.getElementById("dead");
const lostCounter = document.getElementById("lost");

function getHole(index) {
 return document.getElementById(`hole${index}`);
}

for (let index = 1; index < 10; index++) {
  getHole(index).onclick = function () {
    if (getHole(index).classList.contains("hole_has-mole")) {
      let count = Number(deadCounter.textContent);
      count += 1;
      deadCounter.textContent = String(count);
    } else {
      let count = Number(lostCounter.textContent);
      count += 1;
      lostCounter.textContent = String(count);
    }
    let sumClicks = Number(deadCounter.textContent) + Number(lostCounter.textContent);
    if (sumClicks === 10) { 
      if (Number(deadCounter.textContent) > Number(lostCounter.textContent)) {
        alert('Вы выиграли!');
        deadCounter.textContent = 0;
        lostCounter.textContent = 0;
      } else {
        alert('Вы проиграли');
        deadCounter.textContent = 0;
        lostCounter.textContent = 0;
      }
    }
  }
}

 

