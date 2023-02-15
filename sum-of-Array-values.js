var arr = [1, 2, 3, 4];
var total = 0;
for (var i in arr) {
  total += arr[i];
}
console.log(total) =>10

///////////////////////////////////////////

console.log(
  [1,2,3].reduce(function(acc, val) { return acc + val; }, 0)
)

/////////////////////////////////////////

let array =[1,2,3,4,5,6,7]
let tot=0
for(let val  in array){
    tot += array[val]
}
console.log(tot) =>28

let res = array.reduce((acc,val)=>acc+val,0)
console.log(res) =>28

//////////////////////////////////

var addition = [];
addition.push(2);
addition.push(3);

var total = 0;
for (var i = 0; i < addition.length; i++)
{
    total += addition[i];
}
console.log(total); 
