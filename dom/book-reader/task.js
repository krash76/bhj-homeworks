"use strict";

const fontSizes = document.getElementsByClassName('font-size');
const divBook = document.getElementsByClassName('book__control book__control_font-size')

for (let i = 0; i < fontSizes.length; i++) {
  let element = fontSizes[i];
  divBook[0].addEventListener('click', function() {
      element.classList.toggle('font-size_active')
    }
  )
}

 //что не так??? 
