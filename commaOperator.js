let result = (10, 10 + 20);
console.log(result); =>30

/////////////////////////////

let x = 10;
let y = (x++, x + 1);

console.log(x, y);=>11,12

////////// Comma Operator /////////////////

let a = 10;
let b=(a+=10,a)
console.log(b)

///////////////////////////////////

function x(){
    console.log("one")
    return 'one'
}

function y(){
    console.log('two')
    return 'two'
}


function z(){
    console.log('three')
    return 'three'
}


let res = (x(),y(),z())
console.log(res)

///////////////////////////////////////


 for (var x = 0, y = 5; x <= 5; x++, y--) {
    console.log(x, y);
    }










