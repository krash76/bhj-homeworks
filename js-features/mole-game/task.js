"use strict";

const getHole = (index) => {
  document.getElementById(`hole${index}`);
};

//let hole = getHole();


function controlClick() {
   
  if (hole.classList.contains("hole_has-mole")) {
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

hole.onclick = controlClick;


