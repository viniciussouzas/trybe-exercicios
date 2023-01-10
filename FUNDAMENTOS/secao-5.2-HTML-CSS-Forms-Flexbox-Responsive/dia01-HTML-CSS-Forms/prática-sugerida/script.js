// SELETORES
const INPUT_TEXT = document.querySelector("#input-text");
const INPUT_CHECKBOX = document.querySelector("#input-checkbox");
const HREF_LINK = document.querySelector("#href");

const callPrevent = (event) => {
  event.preventDefault();
}

const preventKeys = (event) => {
 const key = event.key;
 if (key !== 'a') {
  event.preventDefault();
 }
};

HREF_LINK.addEventListener('click', callPrevent);

INPUT_CHECKBOX.addEventListener('click', callPrevent);

INPUT_TEXT.addEventListener('keypress', preventKeys);