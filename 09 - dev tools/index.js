const dogs = [
  { name: "Rex", age: 2 },
  { name: "T-Rex", age: 8 },
];

function makeGreen() {
  const p = document.querySelector("p");
  p.style.color = "#BADA55";
  p.style.fontSize = "50px";
}

// Regular
console.log("hello");

// Interpolated
console.log("Hello I am a %s string!", "💩");

// Styled
// console.log('%c I am some great text', 'font-size:50px; background:red; text-shadow: 10px 10px 0 blue')

// warning!
console.warn("OH NOOO");

// Error :|
console.error("Shit!");

// Info
console.info("Crococats eat 3-4 people per year");

// Testing
const p = document.querySelector("p");

console.assert(p.classList.contains("ouch"), "That is wrong!");

// clearing
console.clear();

// Viewing DOM Elements
console.log(p);
console.dir(p);

console.clear();

// Grouping together
dogs.forEach((dog) => {
  console.groupCollapsed(`${dog.name}`);
  console.log(`This is ${dog.name}`);
  console.log(`${dog.name} is ${dog.age} years old`);
  console.log(`${dog.name} is ${dog.age * 7} dog years old`);
  console.groupEnd(`${dog.name}`);
});

// counting

console.count("Nha");
console.count("Nha");
console.count("Teste");
console.count("Teste");
console.count("Nha");
console.count("Teste");
console.count("Nha");
console.count("Teste");
console.count("Teste");
console.count("Teste");
console.count("Teste");
console.count("Teste");

// timing
console.time("fetching data");
fetch("https://api.github.com/users/clh97")
  .then((data) => data.json())
  .then((data) => {
    console.timeEnd("fetching data");
    console.log(data);
  });

console.table(dogs);
