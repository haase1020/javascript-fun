//instead of an IIFE?

// // block scoping - uses the key word 'let'
// let teacher = "Kyle";

// ( function anotherTeacher() {
//     let teacher = "Suzy";
//     console.log(teacher);
// }) ();

// console.log(teacher);

function formatStr(str) {
  //open a block to contain variables to create an explicit let block
  {
    let prefix, rest;
    prefix = str.slice(0, 3);
    rest = str.slice(3);
    console.log('insided block', prefix);
    console.log('insided block', rest);
    str = prefix.toUpperCase() + rest;
  }
  if (/^Foo:/.test(str)) {
    return str;
  }
  return str.slice(4);
}

console.log('hello everyone, my name is mandi'); //returns: hello everyone, my name is mandi
