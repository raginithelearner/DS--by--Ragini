"use strict";
function maxLengthChecker(object) {
  object.value = object.value.slice(0, 15);
}
const numberEntered = document.querySelector("#numberEntered");
const checker = document.querySelector("#checker");
const valueTyped = document.querySelector("#valueTyped");
const inputWrapper = document.querySelector("#inputWrapper");
const result = document.querySelector("#result");
const modalClose = document.querySelector("#modal-close");
const dialog = document.querySelector("#dialog");
const box = document.querySelector("#box");


let isTrue;
let palinLength, palinValue;
numberEntered.addEventListener("input", () => {

  palinLength = numberEntered.value.length;
  palinValue = numberEntered.value;

  if (palinValue != null && palinValue != "") {
    box.style.transform = "scaleX(1)";
  }
});
let element = "";
checker.addEventListener("click", () => {
  const iter = palinLength % 2
      ? Math.floor(palinLength / 2)
      : palinLength / 2 - 1;

for (let i = 0; i <= iter; i++) {
    element += palinValue[i];
  }

Array.from(element).forEach((digit, index) => {
  isTrue = (digit == palinValue[palinLength - (index + 1)]) ? true : false;
  });

  if (!isTrue) {
    valueTyped.innerText = palinValue;
    result.innerText = "It is not a palindrome.";
    modalClose.style.backgroundColor = "red";
    dialog.style.backgroundColor = "#ffc9c9";
  } else {
    valueTyped.innerText = palinValue;
    result.innerText = "It is a palindrome.";
    modalClose.style.backgroundColor = "green";
    dialog.style.backgroundColor = "#b9ffb9";
  }
});
