const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

const addInfoToLesson = (object, key, value) => object[key] = value;

addInfoToLesson(lesson2, 'turno', 'noite');

const listKeys = (object) => Object.keys(object);

const showLength = (object) => Object.keys(object).length;

const listValues = (object) => Object.values(object);

const allLessons = Object.assign({}, {lesson1, lesson2, lesson3});

const totalNumberOfStudents = (object) => {
  let total = 0;
  const keys = Object.keys(object);

  for (index in keys) {
    total += object[keys[index]].numeroEstudantes;
  }
  return total;
}

const getValueByPosition = (object, positon) => Object.values(object)[positon];

const verifyPair = (object, key, value) => {
  const entries = Object.entries(object);
  let isEqual = false;

  for (let index in entries) {
    if (entries[index][0] === key && entries[index][1] === value) {
      isEqual = true;
    }
  }
  return isEqual;
}




