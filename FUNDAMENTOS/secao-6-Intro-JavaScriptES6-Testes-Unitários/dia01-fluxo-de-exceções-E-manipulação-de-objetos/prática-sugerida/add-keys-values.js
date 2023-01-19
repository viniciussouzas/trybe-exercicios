const studentPerson = {
};

const addNewPropertyValue = (object, newProperty, newValue) => {
  object[newProperty] = newValue
};

addNewPropertyValue(studentPerson, 'firstName', 'Vinícius');

addNewPropertyValue(studentPerson, 'lastName', 'Souza');

addNewPropertyValue(studentPerson, 'email', 'tradutorvinicius@gmail.com');

addNewPropertyValue(studentPerson, 'Linkedin', 'www.linkedin.com/in/vinicius-souzas');

console.log(studentPerson);
