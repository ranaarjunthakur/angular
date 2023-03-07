
////////////////////////////////////////////

const cars = [
  { make: 'Opel', class: 'Regular' },
  { make: 'Bugatti', class: 'Supercar' },
  { make: 'Ferrari', class: 'Supercar' },
  { make: 'Ford', class: 'Regular' },
  { make: 'Honda', class: 'Regular' },
]
const supercar = cars.filter(car => car.class === 'Supercar');
console.table(supercar);

//////////////////////////////////////////////////

const car = ['Opel', 'Bugatti', 'Opel', 'Ferrari', 'Ferrari', 'Opel']
const unrepeated_cars = [...new Set(car)];
console.log(unrepeated_cars); 

//////////////////////////////////////////////////

var condtion = true
if(condtion)
{
  console.log("Login Successful")
}

condtion && console.log("Login Successful")

//////////////////////////////////////////////

var array1 = [100, [200, [300, 400, 500], 600], [700, 800,[900,[1000]]]]
console.table(array1.flat(Infinity)) 
let y = array1.flatMap((x)=>x+5)
console.log(y)


//////////////////////////////////////////

let array2 = [100, 200, 300, 400, 500]
console.log(array2.slice(-1)) 
console.log(array2.slice(-2))
console.log(array2.length-1)

////////////////////////////////////////

let number = 123124.45690
console.log(~~number)
console.log(Math.floor(number))

/////////////////////////////////////////

let arr =[124235,235634]
let ayy =[124125,688454]

arr.push.apply(arr,ayy)
console.log(arr)
