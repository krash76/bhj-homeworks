"use strict";

const menu = document.querySelectorAll("div.tab");
const activateTab = (element) => element.classList.add("tab_active");
const content = document.querySelectorAll("div.tab__content");
const activateContent = (subElement) => subElement.classList.add("tab__content_active");

function activateMenu () {
  for (let i = 0; i < menu.length; i++) {
    menu[i].onclick = function() { 
    let element = menu[i];
    let subElement = content[i];
    const activeElement = document.querySelector("div.tab.tab_active");
    activeElement.classList.remove("tab_active");
    const activeSubElement = document.querySelector("div.tab__content.tab__content_active");
    activeSubElement.classList.remove("tab__content_active");
    activateTab(element);
    activateContent(subElement);
    }
  }
}

document.addEventListener("click", activateMenu);