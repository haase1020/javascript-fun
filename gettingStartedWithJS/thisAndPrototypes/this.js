//this keyword: a function's 'this' references the exection context for that call,
//determined entirely by how the function was called.
//a 'this'-aware function can thus have a different context each time its called,
//which make it more flexible and reusable.

// var workshop = {
//   teacher: 'kyle',
//   ask(question) {
//     console.log(this.teacher, question);
//   },
// };

// console.log(workshop.ask('what is implicit binding?'));
// //Kyle, what is implicit binding?

function ask(question) {
  console.log(this.teacher, question);
}

function otherClass() {
  var myContext = {
    teacher: 'suzy',
  };
  ask.call(myContext, 'why?'); // suzy why?
}

console.log(otherClass());
