"use strict";

const leftArrow = document.querySelector("div.slider__arrow.slider__arrow_prev");
const rightArrow = document.querySelector("div.slider__arrow.slider__arrow_next");
let sliders = document.querySelectorAll("div.slider__item");


const activateSlide = (slide) => slide.classList.add("slider__item_active");
const disactivateSlide = (slide) => slide.classList.remove("slider__item_active");

// не могу сообразить как функцию написать(((

rightArrow.onclick = function() {
  
  for (let i = 0; i < sliders.length; i++) {
    let y = i + 1;
    disactivateSlide(sliders[i]);
    activateSlide(sliders[y]); // почему здесь undefined?
    }
  }

