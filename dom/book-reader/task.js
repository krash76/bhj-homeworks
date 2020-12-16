"use strict";

const fontSizes = document.getElementsByClassName('font-size');
const fontSizesArray =Array.from(fontSizes);
const isActive = (element) => element.classList.contains('font-size_active');
const activateSize = (element) => element.classList.add('font-size_active');
const disactivateSize = (element) => element.classList.remove('font-size_active');

const book = document.getElementsByClassName('book');
const smallBook = () => book[0].className = 'book book_fs-small';
const mediumBook = () => book[0].className = 'book';
const bigBook = () => book[0].className = 'book book_fs-big';

for (let i = 0; i < fontSizes.length; i++) {
  let element = fontSizes[i];
  element.addEventListener('click', (event) => {
    event.preventDefault();
    let activeIndex = fontSizesArray.findIndex(isActive);
    if (isActive(element) === true ) {
      disactivateSize(element);
      activateSize(element);
    } else {
      disactivateSize(fontSizes[activeIndex]);
      activateSize(element);
      if (element.classList.contains('font-size_small')) {
        smallBook();
      } else if (element.classList.contains('font-size_big')) {
        bigBook();
      } else {
        mediumBook();
      }
    }
  });
}

 