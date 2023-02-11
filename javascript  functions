

let name = Alice

function showName() {
    console.log(name);
}

showName();  // Alice


///////////// we can call function on top ////////////////////////

let name = Alice

showName(); // -> Alice


function showName() {
    console.log(name);
}
////////////////////////////////////

function showMsg() {
    console.log("message 1");
    return;//-> undefined
    console.log("message 2");
}

showMsg(); // -> message 1


//////////////////////////

function getTrue() {
    return true;
}

let test = getTrue();
console.log(test); // -> true


///////////function Recursion {factorial}/////////////////////


function factorial (n) {
    let result = 1;
    while (n > 1) {
        result *= n;
        n--;
    }
    return result;
}

console.log(factorial(6)); // -> 720

////////////// [n!=n∙(n-1)∙(n-2)∙… ∙2∙1] && [6!=6∙5∙4∙3 ∙2∙1=720] //////////////////////////

function factorial (n) {
    return n > 1 ? n * factorial(n - 1) : 1;
}

console.log(factorial(6)); // -> 720


///////////////passing the function as a call parameter to other functions///////////////////////////

function add(a, b) {
    return a + b;
}

function multiply(a, b) {
    return a * b;
}

function operation(func, first, second) {
    return func(first, second);
}

console.log(operation(add, 10, 20)); // -> 30
console.log(operation(multiply, 10, 20)); // -> 200

////////////function expression [store function in a variable]  /////////////////

let myAdd = function add(a, b) {
    return a + b;
}

console.log(myAdd(10, 20)); // -> 30
console.log(add(10, 20)); // -> 30


//////////////////////////////////////

function operation(func, first, second) {
    return func(first, second);
}

let myAdd = function(a, b) {
    return a + b;
}

console.log(operation(myAdd, 10, 20)); // -> 30

console.log(operation(function(a, b) {
    return a * b;
}, 10, 20)); // -> 200


////////////setTimeout and setInterval functions///////////////////////

let inner = function() {
console.log('inner 1');
}

let outer = function(callback) {
console.log('outer 1');
let timerId = setInterval(callback, 1000) /*ms*/;
console.log('outer 2');

setTimeout(function(){
    clearInterval(timerId);
}, 5500);
}

console.log('test 1');
outer(inner);
console.log('test 2');



////////////////////////callback functions/////////////////

let inner = function() {
    console.log('inner 1');
}

let outer = function(callback) {
    console.log('outer 1');
    callback();
    console.log('outer 2');
}

console.log('test 1');
outer(inner);
console.log('test 2');

///////////////arrow functions/////////////

let add = (a, b) => {
    return a + b;
}
console.log(add(10, 20)); // -> 30


let add = (a, b) => a + b;
console.log(add(10, 20)); // -> 30















