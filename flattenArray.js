
//////////////////// Flatten an Array of Arrays //////////////////////////////

const flattened = [[0, 1], [2, 3], [4, 5]].reduce(
  (accumulator, array) => accumulator.concat(array),
  []
);

console.log(flattened);  // Output: [ 0, 1, 2, 3, 4, 5 ]


////////////////////////////////////////////////

var oldArray = [[1],[2,3],[4]];
var newArray = Array.prototype.concat.apply([], oldArray);
console.log(newArray); // [ 1, 2, 3, 4 ]

/////////////////////////////////////////////////////////

var arr = [ [1,2,3,4], [1,2,[1,2,3]], [1,2,3,4,5,[1,2,3,4,[1,2,3,4]]], [[1,2,3,4], [1,2,[1,2,3]], [1,2,3,4,5,[1,2,3,4,[1,2,3,4]]]] ];

let flatten = arr.flat(Infinity)

console.log(flatten)

////////////////////////////////////////////////

const arr = ["mon", "tues", ["wed", "thurs", ["fri", "sat"]], "sun"] ;
console.log(arr.flat());

// expected output 
["mon", "tues", "wed", "thurs", Array ["fri", "sat"], "sun"];

/////////////////////////////////////////////////////

const arr = [1, 2, [3, 4, 5], 6, 7];

console.log(arr.flat());

// expected output 
[1, 2, 3, 4, 5, 6, 7]

///////////////////////////////////FlatMap()//////////////////////////////

const arr3 = [1, 2, [4, 5], 6, 7, [8]] ;

console.log(arr3.flatMap((element) => element)); 

// expected output 
[1, 2, 4, 5, 6, 7, 8]
