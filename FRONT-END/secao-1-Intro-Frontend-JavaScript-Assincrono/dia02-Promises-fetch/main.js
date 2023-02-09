import Swal from "sweetalert2";

// captura elementos 
const img = document.querySelector('#image');
const name = document.querySelector('#name');
const button = document.querySelector('#button');

const ACCESS_TOKEN = '2401200876700267';

const BASE_URL = `https://www.superheroapi.com/api.php/${ACCESS_TOKEN}`;

const MAX_HEROES = 800;

const randomHeroe = () => Math.floor(Math.random() * MAX_HEROES);

button.addEventListener('click', (event) => {

  event.preventDefault();

  const id = randomHeroe()

  fetch(`${BASE_URL}/${id}`)
    .then((result) => result.json())
    .then((data) => {
      img.src = data.image.url;
      name.innerHTML = data.name;
  })
  .catch((error) => Swal.fire({
    title: 'Hero was not found',
    text: error.message,
    icon: 'error',
    confirmButtonText: 'Cool',
  }));
});
