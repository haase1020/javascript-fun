// closure: when a function "remembers" the variables outside of it,
//even if you pass that function elsewhere

function ask(question) {
  setTimeout(function waitASec() {
    console.log(question);
  }, 100);
}

ask('what is closure?');

//example from mozilla
function makeAdder(x) {
  return function (y) {
    return x + y;
  };
}

var add5 = makeAdder(5);
var add10 = makeAdder(10);

console.log(add5(2)); // 7
console.log(add10(2)); // 12
