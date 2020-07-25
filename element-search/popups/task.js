"use strict";

// 1) какой порядок кода предпочтительней?
// 2) можно но ли еще оптимизировать?

//вариант 1

const mainModal = document.getElementById("modal_main");
const successModal = document.getElementById("modal_success");
const modalsToClose = document.getElementsByClassName("modal__close modal__close_times");
const arrayToClose = Array.from(modalsToClose);
const mainModalToClose = arrayToClose[0];
const successModalToClose = arrayToClose[1];

const activateMain = () => mainModal.className = "modal modal_active";
const disactivateMain = () => mainModal.className = "modal";
const activateSuccess = () => successModal.className = "modal modal_active";
const disactivateSuccess = () => successModal.className = "modal";

activateMain();

mainModal.onclick = function() {
  disactivateMain();
  activateSuccess();
}

successModalToClose.onclick = function () {
  disactivateSuccess();
}

//вариант 2

// const mainModal = document.getElementById("modal_main");

// const activateMain = () => mainModal.className = "modal modal_active";

// activateMain();

// const modalsToClose = document.getElementsByClassName("modal__close modal__close_times");
// const arrayToClose = Array.from(modalsToClose);
// const mainModalToClose = arrayToClose[0];
// const disactivateMain = () => mainModal.className = "modal";
// const activateSuccess = () => successModal.className = "modal modal_active";

// mainModal.onclick = function() {
//   disactivateMain();
//   activateSuccess();
// }

// const successModal = document.getElementById("modal_success");
// const successModalToClose = arrayToClose[1];
// const disactivateSuccess = () => successModal.className = "modal";

// successModalToClose.onclick = function () {
//   disactivateSuccess();
// }