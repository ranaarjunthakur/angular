
///////////////////SPREAD ///////////////////////////////

let arr1=[1,2,3,4,5,67]
let arr2 =[68,69,70]

let spread = [...arr1,...arr2,80]
console.log(spread)


 const obj = {
        firstname: "Divit",
        lastname: "Patidar",
    };
    const obj2 = { ...obj };
    console.log(obj2);


//////////////////REST//////////////////////

function add(...myArg){
    let sum =0;
    for(let i of myArg){
        sum+=i;
    }
    return sum;
}

console.log(add(1,2,3,4,5,6,7,8,9))

function addNum(a,b,c,...many){
    return a+b+c;
}

const reslt = addNum(10,40,3,4,5,6)
console.log(reslt)
