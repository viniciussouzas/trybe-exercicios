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

//

const createSectionLeft = document.createElement('section');
createSectionLeft.className = 'left-content';

main.appendChild(createSectionLeft);

//

const createSectionRight = document.createElement('section');
createSectionRight.className = 'right-content';

main.appendChild(createSectionRight);

//

const sectionLeft = document.getElementsByClassName('left-content')[0];

const createSmallImg = document.createElement('img');
createSmallImg.className = 'small-image';
createSmallImg.src = 'https://picsum.photos/200';

sectionLeft.appendChild(createSmallImg);

//

const sectionRight = document.getElementsByClassName('right-content')[0];

const createUL = document.createElement('ul');
createUL.id = 'unorded-list';

const numbersArray = ['um', 'dois', 'três', 'quatro', 'cinco', 'seis', 'sete', 'oito', 'nove', 'dez'];

for (let index = 0; index < numbersArray.length; index += 1) {
  const createLi = document.createElement('li');
  createLi.innerHTML = numbersArray[index];
  createUL.appendChild(createLi);
  sectionRight.appendChild(createUL);
}

//

for (let index = 1; index <= 3; index += 1) {
  const createTagsH3 = document.  createElement('h3');
  createTagsH3.className = 'description';

  main.appendChild(createTagsH3);
}