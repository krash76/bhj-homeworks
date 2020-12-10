"use strict";

const reveals = document.getElementsByClassName('reveal');
const activateReveal = (element) => element.classList.add("reveal_active");
const disactiveReveal = (element) => element.classList.remove("reveal_active");
const isInViewport = function () {
  for (let i = 0; i < reveals.length; i++) {
    let element = reveals[i];
    const viewportHeight = window.innerHeight;
    const elementTop = element.getBoundingClientRect().top;
    if (elementTop <= viewportHeight && elementTop > 0 ) {
      activateReveal(element);
    } else {
      disactiveReveal(element);
    }
  }
}

window.addEventListener("scroll",isInViewport);



