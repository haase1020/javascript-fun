//scope: where to look for things
let teacher = 'kyle';

function otherClass() {
  teacher = 'suzy';
  topic = 'react';
  console.log('welcome!');
}
console.log(otherClass()); //welcome!!
console.log(teacher); //suzy
console.log(topic); //react

//undefined: variable that has been declared but has no value
//undeclared: never been declared

//function expression: function that has been assigned as a variable

// closures
