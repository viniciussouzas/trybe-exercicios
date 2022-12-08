const body = document.getElementById('body');

//

const createH1 = document.createElement('h1');
createH1.id = 'title';
createH1.innerText = 'TrybeTrip - Agência de Viagens';

body.appendChild(createH1);

//

const createMain = document.createElement('main');
createMain.className = 'main-content';

body.appendChild(createMain);

//

const main = document.getElementsByClassName('main-content')[0];

const createSectionCenter = document.createElement('section');
createSectionCenter.className = 'center-content';

main.appendChild(createSectionCenter);

//

const sectionCenter = document.getElementsByClassName('center-content')[0];

const createPOfSectionCenter = document.createElement('p');
createPOfSectionCenter.id = 'paragraph-of-sectionCenter';
createPOfSectionCenter.innerText = 'Aqui temos o texto do SectionCenter';

sectionCenter.appendChild(createPOfSectionCenter);