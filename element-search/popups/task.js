"use strict";

const mainModal = document.getElementById("modal_main");
const successShow = document.getElementsByClassName("show-success");
const successModal = document.getElementById("modal_success");
const modalsToClose = document.getElementsByClassName("modal__close modal__close_times");

const activateMain = () => mainModal.className = "modal modal_active";
const disactivateMain = () => mainModal.className = "modal";
const activateSuccess = () => successModal.className = "modal modal_active";
const disactivateSuccess = () => successModal.className = "modal";

activateMain();

modalsToClose[0].onclick = function() {
  disactivateMain();
}

successShow[0].onclick = function() {
  disactivateMain();
  activateSuccess();
}

modalsToClose[1].onclick = function () {
  disactivateSuccess();
}