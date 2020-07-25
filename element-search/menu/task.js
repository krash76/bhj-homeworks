"use strict";

const menu = document.querySelectorAll("li a.menu__link");
const activateMenu = (element) => element.classList.add("menu_active");
const disactivateMenu = (element) => element.classList.remove("menu_active");

for (let i = 0; i < menu.length; i++) {
  menu[i].onclick = function() {
    if (menu[i].closest("li").querySelector("ul.menu")) {
      let element = menu[i].closest("li").querySelector("ul.menu"); 
      if (element.classList.contains("menu_sub")) {
        if (element.classList.contains("menu_active")) {
          disactivateMenu(element);
        } else {
          let allSubmenu = document.querySelectorAll("ul.menu");
          for (let i = 0; i < allSubmenu.length; i++) {
            if (allSubmenu[i].classList.contains("menu_active")) {
              allSubmenu[i].classList.remove("menu_active")
            }
          }
          activateMenu(element);
        }
        return false;
      }  
    }
  }
}

