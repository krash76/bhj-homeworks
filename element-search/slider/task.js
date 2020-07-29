"use strict";

const leftArrow = document.querySelector("div.slider__arrow.slider__arrow_prev");
const rightArrow = document.querySelector("div.slider__arrow.slider__arrow_next");
let sliders = document.querySelectorAll("div.slider__item");
let slidersArray = Array.from(sliders);

let nextIndex;

function isActive(slide) {
  return slide.className === "slider__item slider__item_active";
}
 
function activate(slide) {
  slide.className = "slider__item slider__item_active";
}

rightArrow.onclick = function() {
  let activeIndex = slidersArray.findIndex(isActive);
  slidersArray[activeIndex].className = "slider__item";
  if (activeIndex < (slidersArray.length - 1)) {
    nextIndex = activeIndex + 1;
  } else {
    nextIndex = 0;
  }
  activate(slidersArray[nextIndex]);
}

leftArrow.onclick = function() {
  let activeIndex = slidersArray.findIndex(isActive);
  slidersArray[activeIndex].className = "slider__item";
  if (activeIndex === 0) {
    nextIndex = slidersArray.length - 1;
  } else {
    nextIndex = activeIndex - 1;
  }
  activate(slidersArray[nextIndex]);
}
