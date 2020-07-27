"use strict";

const leftArrow = document.querySelector("div.slider__arrow.slider__arrow_prev");
const rightArrow = document.querySelector("div.slider__arrow.slider__arrow_next");

const activateSlide = (slide) => slide.classList.add("slider__item_active");
const disactivateSlide = (slide) => slide.classList.remove("slider__item_active");

function isActive(slide) {
  return slide.className = "slider__item slider__item_active";
}
 
rightArrow.onclick = function() {
  let sliders = document.querySelectorAll("div.slider__item"); //почему не обновляется при повторном клике?
  let slidersArray = Array.from(sliders);
  let activeIndex = slidersArray.findIndex(isActive);
  disactivateSlide(sliders[activeIndex]);
  let nextIndex = activeIndex + 1;
  activateSlide(sliders[nextIndex]); 
}
