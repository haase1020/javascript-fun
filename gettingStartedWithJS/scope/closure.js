// closure: when a function "remembers" the variables outside of it,
//even if you pass that function elsewhere

function ask(question) {
  setTimeout(function waitASec() {
    console.log(question);
  }, 100);
}

ask('what is closure?');

//example from mozilla
// in this example, both add5 and add10 are closues. They share the same function
// body definition, but store different lexical environments. In add5's lexical environment
// x is 5, while in the lexical environment for add10, x is 10.

//lexical environment is the surrounding state (or data)
function makeAdder(x) {
  return function (y) {
    return x + y;
  };
}

var add5 = makeAdder(5);
var add10 = makeAdder(10);

console.log(add5(2)); // 7
console.log(add10(2)); // 12
