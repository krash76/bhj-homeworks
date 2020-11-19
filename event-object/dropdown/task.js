"use strict";

const menu = document.getElementsByClassName("dropdown__value"); //<div class="dropdown__value">
const list = document.getElementsByClassName("dropdown__list"); //<ul class="dropdown__list dropdown__list_active"></ul>
const links = document.getElementsByClassName("dropdown__link");

function activateMenu() {
  if (list[0].className === "dropdown__list dropdown__list_active") {
    list[0].className = "dropdown__list";
  } else {
    list[0].className = "dropdown__list dropdown__list_active";
  }
}

function changeValue() {
  for (let i = 0; i < menu.length; i++) {
    menu[i].textContent = this.textContent;
    list[0].className = "dropdown__list";
  }
}

for (let i = 0; i < menu.length; i++) {
  menu[i].addEventListener("click", activateMenu);
}

for (let i = 0; i < links.length; i++) {
  links[i].onclick = function(event) {
    event.preventDefault();
  }  
  links[i].addEventListener("click", changeValue);
}


