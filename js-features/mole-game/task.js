"use strict";

const deadCounter = document.getElementById("dead");
const lostCounter = document.getElementById("lost");

function getHole(index) {
 return document.getElementById(`hole${index}`);
}

for (let index = 1; index < 10; index++) {
  getHole(index).onclick = function () {
    if (this.classList.contains("hole_has-mole")) {
      let count = Number(deadCounter.textContent);
      count += 1;
      deadCounter.textContent = String(count);
    } else {
      let count = Number(lostCounter.textContent);
      count += 1;
      lostCounter.textContent = String(count);
    }
    if (Number(deadCounter.textContent) === 10) {
      alert('Вы выиграли!');
      deadCounter.textContent = 0;
      lostCounter.textContent = 0;
    } else if (Number(lostCounter.textContent) === 5) {
      alert('Вы проиграли');
      deadCounter.textContent = 0;
      lostCounter.textContent = 0;
    }
  }
}


 

