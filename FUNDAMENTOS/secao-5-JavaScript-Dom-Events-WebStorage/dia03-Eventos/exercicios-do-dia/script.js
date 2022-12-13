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