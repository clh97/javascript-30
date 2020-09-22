// start with strings, numbers and booleans

let age = 100;
let age2 = age;

console.log(age, age2);

age = 200;

console.log(age, age2);

let name = "wes";
let name2 = name;

console.log(name, name2);

name = "wesley";

console.log(name, name2);

// Let's say we have an array
const players = ["Wes", "Sarah", "Ryan", "Poppy"];

// and we want to make a copy of it.

const team = players;

console.log(team, players);

team[3] = "Potato";

console.log(team, players);

// You might think we can just do something like this:

// however what happens when we update that array?

// now here is the problem!

// oh no - we have edited the original array too!

// Why? It's because that is an array reference, not an array copy. They both point to the same array!

// So, how do we fix this? We take a copy instead!
const team2 = players.slice();

const team22 = Array.from(players);

team2[3] = "Lux";

console.log(players, team2, team22);

// one way

// or create a new array and concat the old one in
const team3 = [].concat(players);

// or use the new ES6 Spread
const team4 = [...players];

// now when we update it, the original one isn't changed
team3[3] = "Lala";
team4[3] = "Test";

console.log(players, team3, team4);

// The same thing goes for objects, let's say we have a person object

// with Objects
const person = {
  name: "Wes Bos",
  age: 80,
};

// and think we make a copy:
const captain = person;
person.number = 99;

// how do we take a copy instead?

const cap2 = Object.assign({}, person, { number: 99, age: 12 });

// We will hopefully soon see the object ...spread --> \o/
const cap3 = { ...person, age: 32 };

console.log(person, captain, cap2, cap3);

// Things to note - this is only 1 level deep - both for Arrays and Objects. lodash has a cloneDeep method, but you should think twice before using it.
