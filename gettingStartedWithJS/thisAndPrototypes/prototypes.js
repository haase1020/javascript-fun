//the following is what the Class keyword is doing under the hood:
function Workshop(teacher) {
  this.teacher = teacher;
}
Workshop.prototype.ask = function (question) {
  console.log(this.teacher, question);
};

var deepJS = new Workshop('Kyle');
var reactJS = new Workshop('Suzy');

console.log(deepJS.ask("is 'prototype' a class?"));
//Kyle is prototype a class?

console.log(reactJS.ask("isn't 'prototype' ugly?"));
//Suzy isn't prototype ugly?
