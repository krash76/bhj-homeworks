"use strict";

const leftArrow = document.querySelector("div.slider__arrow.slider__arrow_prev");
const rightArrow = document.querySelector("div.slider__arrow.slider__arrow_next");
let sliders = document.querySelectorAll("div.slider__item");

function isActive(slide) {
  return slide.className = "slider__item slider__item_active";
}
 
rightArrow.onclick = function() {
  let slidersArray = Array.from(sliders);
  let activeIndex = slidersArray.findIndex(isActive);
  sliders[activeIndex].classList.remove("slider__item_active");
  slidersArray[activeIndex].className = "slider__item";

  let nextIndex = activeIndex + 1;
  sliders[nextIndex].classList.add("slider__item_active");
  slidersArray[nextIndex].className = "slider__item slider__item_active";
  //console.log(slidersArray)
 }
