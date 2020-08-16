//IIFEs: immediately invoked function expression
let teacher = 'mandi';
(function anotherTeacher() {
  var teacher = 'kyle';
  console.log(teacher); //Suzy
})(); //this calls the function immediately
//this creates another block of scope that does not override teacher mandi

console.log(teacher); // Kyle
