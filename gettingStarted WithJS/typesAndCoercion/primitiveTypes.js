// undefined;
// string;
// number;
// boolean;
// object;
// symbol;

let v = 2;
console.log(typeof v);

let x = 'Mandi';
console.log(typeof x);

//NaN
let greeting = 'Hello everyone!';
let something = greeting / 2;
console.log(something); //outputs NaN
console.log(Number.isNaN(something)); //outputs true

//fundamental objects:
// use new: Object(), Array(), Function(), Date(), RegExp(), Error()
//Do not use new: String(), Number(), Boolean()
let todaysDate = new Date();
console.log(todaysDate);

//coercion
let msg1 = 'there are ';
let numStudents = 16;
let msg2 = ' students';
console.log(msg1 + numStudents + msg2); //implicit coercion of 16 to a string by using "+" operator

//booleans:
// falsy: 0, -0, null, NaN, false, undefined
// truthy: "foo", 23, {a:1}, [1,3], true, etc

//equality
// == allows coercion (types different)
// === disallows coercion (types same)
let student1 = 'Frank';
let student2 = `${student1}`;
student1 == student2; //true
student1 === student2; //true

let workshop1 = { topic: null };
let workshop2 = {};

if (
  (workshop1.topic === null || workshop1.topic === undefined) &&
  (workshop2.topic === null || workshop2.topic === undefined)
) {
  console.log('Workshop 1 and workshop 2 are the exact same types');
}

//this is arguably easier to read and uses ==
if (workshop1.topic == null && workshop1.topic == null) {
  console.log('workshop1 and workshop2 are both null');
}
