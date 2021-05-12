"use strict";

const interests = document.getElementsByClassName("interest__check");
const interestsArray = Array.from(interests);
const firstList = Array.from([interests[0], interests[1], interests[2]]);
const secondList = Array.from([interests[3], interests[4], interests[5]]);

const check = (el) => el.checked = true;
const uncheck = (el) => el.checked = false;
        
const checkcontrol = () => {
  if (firstList[0].checked === true) {
    for (let el of secondList) {
        uncheck(el);
      };
    for (let el of firstList) {
      check(el);
      };
  } else if (secondList[0].checked === true) {
    for (let el of firstList ) {
        uncheck(el);
      };    
    for (let el of secondList ) {
        check(el);
      }; 
  } else {
    uncheck(interestsArray);
  }
}

const changecontrol = () => {
  if (firstList[0].checked === false && secondList[0].checked === false ) {
    for (let el of firstList) {
      uncheck(el);
    }
    for (let el of secondList ) {
      uncheck(el);
    }; 
  }
}

firstList[0].addEventListener('input', checkcontrol);
firstList[0].addEventListener('change', changecontrol);
secondList[0].addEventListener('input', checkcontrol);
secondList[0].addEventListener('change', changecontrol);
  


  



