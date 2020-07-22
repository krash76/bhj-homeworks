"use strict";

const getHole = (index) => {
 document.getElementById(`hole${index}`);
}
 
for (let index = 1; index < 10; index++) {
  getHole.onclick = function () {
    if (getHole.classList.contains("hole_has-mole")) {
      const deadCounter = document.getElementById("dead");
      let count = Number(deadCounter.textContent);
      count += 1;
      deadCounter.textContent = String(count);
    } else {
      const lostCounter = document.getElementById("lost");
      let count = Number(lostCounter.textContent);
      count += 1;
      lostCounter.textContent = String(count);
    }  
  }
}
 


