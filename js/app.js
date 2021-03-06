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
  { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 },
]

// Array.prototype.filter()
// 1. Filter the array of inventors into a new array containing only the inventors born in the 1500's.

const inventorsBornInThe1500s = inventors.filter(function (inventor) {
  if (inventor.year > 1499 && inventor.year < 1600) {
    return true
  }
  return false
})

console.log('1.', inventorsBornInThe1500s)

// Array.prototype.map()
// 2. Map the array of the inventors into a new array containing objects with just the first and last names as properties.

const firstAndLastNameOfInventors = inventors.map(function (inventor) {
  return { first: inventor.first, last: inventor.last }
})

console.log('2.', firstAndLastNameOfInventors)

// Array.prototype.sort()
// 3. Sort the inventors by birthdate, from those born furthest in the past to those born most recently.

const inventorsOne = [...inventors]

const inventorsByBirthdate = inventorsOne.sort(function (inventorA, inventorB) {
  return inventorA.year - inventorB.year
})

console.log('3.', inventorsByBirthdate)

// 4. Sort the inventors by years lived from shortest to longest-lived.

const inventorsTwo = [...inventors]

const inventorsByDeathAge = inventorsTwo.sort(function (inventorA, inventorB) {
  inventorADeathAge = inventorA.passed - inventorA.year
  inventorBDeathAge = inventorB.passed - inventorB.year
  return inventorADeathAge - inventorBDeathAge
})

console.log('4.', inventorsByDeathAge)

// Array.prototype.reduce()
// 5. Find how many years all the inventors lived combined.

const totalYearsAllInventorsLived = inventors.reduce(function (acc, inventor) {
  return acc + (inventor.passed - inventor.year)
}, 0)

console.log('5.', parseInt(totalYearsAllInventorsLived))

// or...

// let totalYearsAllInventorsLived = inventors.reduce(function(acc, inventor) {
//   const inventorDeathAge = inventor.passed - inventor.year;
//   return acc + inventorDeathAge;
// }, 0)

// console.log("5." totalYearsAllInventorsLived);

const people = [
  'Becker, Carl',
  'Beckett, Samuel',
  'Beddoes, Mick',
  'Beecher, Henry',
  'Beethoven, Ludwig',
  'Begin, Menachem',
  'Belloc, Hilaire',
  'Bellow, Saul',
  'Benchley, Robert',
  'Benenson, Peter',
  'Ben-Gurion, David',
  'Benjamin, Walter',
  'Benn, Tony',
  'Bennington, Chester',
  'Benson, Leana',
  'Bent, Silas',
  'Bentsen, Lloyd',
  'Berger, Ric',
  'Bergman, Ingmar',
  'Berio, Luciano',
  'Berle, Milton',
  'Berlin, Irving',
  'Berne, Eric',
  'Bernhard, Sandra',
  'Berra, Yogi',
  'Berry, Halle',
  'Berry, Wendell',
  'Bethea, Erin',
  'Bevan, Aneurin',
  'Bevel, Ken',
  'Biden, Joseph',
  'Bierce, Ambrose',
  'Biko, Steve',
  'Billings, Josh',
  'Biondo, Frank',
  'Birrell, Augustine',
  'Black, Elk',
  'Blair, Robert',
  'Blair, Tony',
  'Blake, William',
]

// Array.prototype.map()
// 6. Map the people array such that the new array consists of strings with the names formatted as "First Last", e.g., "Becker, Carl" should be mapped to "Carl Becker".

const peopleFirstLastName = people.map(person => {
  return person.split(', ').reverse().join(' ')
})

console.log('6.', peopleFirstLastName)

const data = [
  'car',
  'car',
  'truck',
  'truck',
  'bike',
  'walk',
  'car',
  'van',
  'bike',
  'walk',
  'car',
  'van',
  'car',
  'truck',
]

// Array.prototype.reduce()
// 7. Count the number of instances for each of the data items.
// Hint:  Return an object where the keys are 'car', 'truck', etc. and the values are the count.

const vehicles = data.reduce((acc, vehicle) => {
  acc[vehicle] = acc[vehicle] ? acc[vehicle] + 1 : 1
  return acc
}, {})

console.log('7.', vehicles)

const devs = [
  { name: 'Wes', year: 1988 },
  { name: 'Kait', year: 1986 },
  { name: 'Irv', year: 1970 },
  { name: 'Lux', year: 2015 },
]

// Array.prototype.some()
// 8. Is at least one person 19 or older?

// Grabbing the current year.
const thisYear = new Date().getFullYear()

// This method will work through time, but you could also hard code the date. 
const devsOver19 = devs.some(dev => thisYear - dev.year >= 19)

console.log('8.', devsOver19)

// Array.prototype.every()
// 9. Is everyone 19 or older?

// This method will work through time, but you could also hard code the date. 
const allDevsOver19 = devs.every(dev => thisYear - dev.year >= 19)

console.log('9.', allDevsOver19)

const comments = [
  { text: 'Love this!', id: 523423 },
  { text: 'Super good', id: 823423 },
  { text: 'You are the best', id: 2039842 },
  { text: 'Ramen is my fav food ever', id: 123523 },
  { text: 'Nice Nice Nice!', id: 542328 },
]

// Array.prototype.find()
// 10. Find the comment with the id of 823423

const comment823423 = comments.find(comment => comment.id === 823423)

console.log('10.', comment823423)

// Array.prototype.findIndex()
// 11. Find the index of the comment with an id of 123523

const comment123523Index = comments.findIndex(comment => comment.id === 123523)

console.log('11.', comment123523Index)
