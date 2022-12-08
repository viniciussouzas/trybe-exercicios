const body = document.getElementById('body');

const createH1 = document.createElement('h1');
createH1.id = 'title';
createH1.innerText = 'TrybeTrip - Agência de Viagens';

body.appendChild(createH1);

const createMain = document.createElement('main');
createMain.className = 'main-content';

body.appendChild(createMain);