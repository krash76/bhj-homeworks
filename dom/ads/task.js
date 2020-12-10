"use strict";

const rotators = document.getElementsByClassName('rotator__case');
let rotatorsArray = Array.from(rotators);
const isActive = (element) => element.classList.contains('rotator__case_active');
const activateRotator = (element) => element.classList.add('rotator__case_active');
const disactivateRotator = (element) => element.classList.remove('rotator__case_active');
let nextIndex;

function changeRotator() {
  let activeIndex = rotatorsArray.findIndex(isActive);
  if (activeIndex < (rotatorsArray.length - 1)) {
    nextIndex = activeIndex + 1;
    } else {
      nextIndex = 0;
    }
  disactivateRotator(rotators[activeIndex]);
  activateRotator(rotators[nextIndex]);
}

setInterval(changeRotator, 1000);