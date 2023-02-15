
/////////////////////////////////////////

let prices = {
  "apple": 100,
  "banana": 300,
  "orange": 250
};

let sum = 0;
for (let price of Object.values(prices)) {
  sum += price;
}

console.log(sum)


/////////////////////////////

const sample = { a: 1, b: 2, c: 3 };  
const totalSample = Object.values(sample).reduce((tot, curr) => tot + curr
);
console.log(totalSample);

