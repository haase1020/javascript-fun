// function expresion: a function assigned as a value somewhere
// a first citizen - can be passed around

const clickHandler = function () {}; // anonymous fe

const keyHandler = function keyHandler() {}; // named fe --> this is better

const ids = people.map((person) => person.id); // anon fe which can be a bit vague

const ids = people.map(function getId(person) {
  return person.id;
}); // a named fe is much clearer on what it is doing

getPerson()
  .then((person) => getData(person.id))
  .then(renderData); //this might be harder to understand what is happening

getPerson()
  .then(function getDataFrom(person) {
    return getData(person.id);
  })
  .then(renderData);
