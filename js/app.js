// Some data we can work with
const inventors = [
  { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
  { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
  { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
  { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
  { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
  { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
  { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
  { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
  { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
  { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
  { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
  { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
];

// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's

const inventorsBornInThe1500s = inventors.filter(function(inventor){
  if (inventor.year > 1499 && inventor.year < 1600) {
      return true
  }
  return false
})

console.log(inventorsBornInThe1500s)

// Array.prototype.map()
// 2. Give us an array of the inventors' first and last names

const firstAndLastNameOfInventors = inventors.map(function(inventor) {
  return inventor.first + " " + inventor.last
})

console.log(firstAndLastNameOfInventors);

// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest

const inventorsByBirthdate = inventors.sort(function (inventorA, inventorB) {
    return inventorB.year < inventorA.year
})

console.log(inventorsByBirthdate)

// 4. Sort the inventors by years lived

let inventorsByDeathAge = inventors.sort(function (inventorA, inventorB) {
    inventorADeathAge = inventorA.passed - inventorA.year
    inventorBDeathAge = inventorB.passed - inventorB.year
    return inventorBDeathAge > inventorADeathAge
})

console.log(inventorsByDeathAge);

// Array.prototype.reduce()
// 5. How many years did all the inventors live?

const totalYearsAllInventorsLived = inventors.reduce(function(acc, inventor){
   return acc + (inventor.passed - inventor.year);
},0)

console.log(parseInt(totalYearsAllInventorsLived))

// or...

// let totalYearsAllInventorsLived = inventors.reduce(function(acc, inventor) {
//   const inventorDeathAge = inventor.passed - inventor.year;
//   return acc + inventorDeathAge;
// }, 0)

// console.log(totalYearsAllInventorsLived);

const people = [
  'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry',
  'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul',
  'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David',
  'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana',
  'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar',
  'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric',
  'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell',
  'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph',
  'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank',
  'Birrell, Augustine', 'Black, Elk', 'Blair, Robert', 'Blair, Tony',
  'Blake, William'
];

// Array.prototype.sort()
// 6. Sort the people array alphabetically by last name

const peopleByLastName = people.sort()

console.log(peopleByLastName)

const data = [
  'car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van',
  'bike', 'walk', 'car', 'van', 'car', 'truck'
];

// Array.prototype.reduce()
// 7. Count the number of instances for each of the data items.
// Hint:  Return an object where the keys are 'car', 'truck', etc. and the values are the count.

const vehicles = data.reduce((acc, vehicle) => {
  acc[vehicle] = acc[vehicle] ? acc[vehicle] + 1 : 1;
  return acc;
}, {});

console.log(vehicles);

const devs = [
  { name: 'Wes', year: 1988 },
  { name: 'Kait', year: 1986 },
  { name: 'Irv', year: 1970 },
  { name: 'Lux', year: 2015 }
];

// Array.prototype.some()
// 8. Is at least one person 19 or older?

const devsOver19 = devs.some((dev) => 2021 - dev.year > 19)

console.log(devsOver19);

// Array.prototype.every()
// 9. Is everyone 19 or older?

const allDevsOver19 = devs.every((dev) => 2021 - dev.year > 19)

console.log(allDevsOver19);

const comments = [
  { text: 'Love this!', id: 523423 },
  { text: 'Super good', id: 823423 },
  { text: 'You are the best', id: 2039842 },
  { text: 'Ramen is my fav food ever', id: 123523 },
  { text: 'Nice Nice Nice!', id: 542328 }
];

// Array.prototype.find()
// 10. Find the comment with the id of 823423

const comment823423 = comments.find((comment) => comment.id === 823423)

console.log(comment823423);

// Array.prototype.findIndex()
// 11. Find the index of the comment with an id of 123523

const comment123523Index = comments.findIndex(
  (comment) => comment.id === 123523
)

console.log(comment123523Index);