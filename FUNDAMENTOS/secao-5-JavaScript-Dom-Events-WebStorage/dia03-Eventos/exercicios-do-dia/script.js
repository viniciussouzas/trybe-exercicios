const createDaysOfTheWeek = () => {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
}

createDaysOfTheWeek();

// Escreva seu código abaixo.

//parte 1

const createDaysOfTheMonth = () => {
  const decemberDays = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  const decemberDaysList = document.getElementById('days');

  for (let index = 0; index < decemberDays.length; index +=1) {
    const numberDays = decemberDays[index];
    const numberDaysListItem = document.createElement('li');
    numberDaysListItem.className = 'day';
    numberDaysListItem.innerHTML = numberDays;

    if (numberDays === 24 || numberDays === 31) {
      numberDaysListItem.className = 'day holiday';
    } else if (numberDays === 4 || numberDays === 11 || numberDays === 18) {
      numberDaysListItem.className = 'day friday';
    } else if (numberDays === 25) {
      numberDaysListItem.className = 'day friday holiday';
    }

    decemberDaysList.appendChild(numberDaysListItem);
  };
}

createDaysOfTheMonth();

//parte 2

const buttonContainer = document.getElementsByClassName('buttons-container')[0];

const createButtonHoliday = (string) => {
  const button = document.createElement('button');
  button.id = 'btn-holiday';
  button.innerHTML = string

  buttonContainer.appendChild(button);
}

createButtonHoliday('Feriados');

//parte 3

const holidayDays = document.getElementsByClassName('holiday');

const buttonHoliday = document.getElementById('btn-holiday');

const changeBackColor = () => {
  for (let index = 0; index < holidayDays.length; index += 1) {
    if (holidayDays[index].style.backgroundColor === 'white') {
      holidayDays[index].style.backgroundColor = '#2fc18c';
    } else {
      holidayDays[index].style.backgroundColor = 'white';
    }
  }
}

buttonHoliday.addEventListener('click', changeBackColor);

//parte 4

const createButtonFriday = (string) => {
  const button = document.createElement('button');
  button.id = 'btn-friday';
  button.innerHTML = string

  buttonContainer.appendChild(button);
}

createButtonFriday('Sexta-feira');

//parte 5

const fridayDays = document.getElementsByClassName('friday');
const buttonFriday = document.getElementById('btn-friday');
const fridayArray = [4, 11, 18, 25];

const changeTextFridays = () => {
  for (let index = 0; index < fridayDays.length; index += 1) {
    if (fridayDays[index].innerText === 'SEXTOUU') {
      fridayDays[index].innerText = fridayArray[index];
    } else {
      fridayDays[index].innerText = 'SEXTOUU'
    }
  }
}

buttonFriday.addEventListener('click', changeTextFridays);

//parte 6

const allDays = document.getElementById('days');

const zoomDays = event => {
  event.target.style.fontSize = '40px';
}

const zoomOutDays = event => {
  event.target.style.fontSize = '20px';
}

allDays.addEventListener('mouseover', zoomDays);
allDays.addEventListener('mouseout', zoomOutDays);