const buttonSubmit = document.getElementById('btn-submit');

const preventDefault = event => {
  event.preventDefault();
}

buttonSubmit.addEventListener('click', preventDefault);