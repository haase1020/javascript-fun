//layered on top of prototype system
// same output as in the prototypes.js file but cleaner construction

class Workshop {
  constructor(teacher) {
    this.teacher = teacher;
  }
  ask(question) {
    console.log(this.teacher, question);
  }
}

var deepJS = new Workshop('Kyle');
var reactJS = new Workshop('Suzy');

console.log(deepJS.ask("is 'prototype' a class?"));
//Kyle is prototype a class?

console.log(reactJS.ask("isn't 'prototype' ugly?"));
//Suzy isn't prototype ugly?
