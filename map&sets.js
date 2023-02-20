
const cars = ["Saab", "Volvo", "BMW"];

const map = new Map([cars])

map.set('Maruti')
console.log(map)

////////////////////////////

const user = {
  name: "Sam Smith",
  age: 32,
}

user.set('firstName', 'Luke')
user.set('lastName', 'Skywalker')
user.set('occupation', 'Jedi Knight')

const userMap = new Map(Object.entries(user));
console.log(userMap);



////////////////////Sets////////////////

const set = new Set(['Beethoven', 'Mozart', 'Chopin', 'Chopin'])
const arr = [...set]

console.log(arr)

// Delete an item
set.delete('Beethoven') // true

// Check for the existence of an item
set.has('Beethoven') // false

// Clear a Set
set.clear()

// Check the size of a Set
set.size // 0

///////////////////////////

const set = new Set(['hi', 'hello', 'good day'])

// Iterate a Set with forEach
set.forEach((value) => console.log(value))

///////////////////////

// Iterate a Set with for...of
for (const value of set) {
  console.log(value)
}
