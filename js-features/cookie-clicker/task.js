"use strict";

const image = document.getElementById("cookie");
const counter = document.getElementById("clicker__counter");

function changeSizeOn() {
 image.width = 250;
 }

function changeSizeOff() {
  image.width = 200;
}

function clicker () {
  let count = Number(counter.textContent);
  count += 1;
  counter.textContent = String(count);
  changeSizeOn();
  setTimeout(changeSizeOff, 100);
}

image.onclick = clicker;
 



  
