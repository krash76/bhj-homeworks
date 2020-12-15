"use strict";

const fontSizes = document.getElementsByClassName('font-size');

const isActive = (el) => el.classList.contains('font-size_active');
const activateSize = (el) => el.classList.add('font-size_active');
const disactivateSize = (el) => el.classList.remove('font-size_active');

const book = document.getElementsByClassName('book');
const bigBook = () => book[0].classList.add('book_fs-big');
const smallBook = () => book[0].classList.add('book_fs-small');
const disactivateBook = () => book[0].className = 'book_fs-small';


for (let i = 0; i < fontSizes.length; i++) {
  let element = fontSizes[i];
  element.addEventListener('click', () => {
         console.log(element); //что не так??? Почему клик на element не работает?
  });
}

 