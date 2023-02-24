//////////////// PASS FUNCTION IN ANOTHER FUNCTION AS A ARGUMENT /////////////////////


function add (a,b,mul){   ////////mul IS A CALLBACK FUNCTION
    console.log(a+b)
    mul(20,30)
}

function mul(c,d){
    console.log(c*d)
}


add(10,20,mul)



///////////////////////////////////////

// function
function greet(name, callback) {
    console.log('Hi' + ' ' + name);
    callback();
}

// callback function
function callMe() {
    console.log('I am callback function');
}

// passing function as an argument
greet('Peter', callMe);

////////////////////////////////////////

1. Synchronous Callback Function


console.log('Start')

function divide(a, b) {
  console.log(a / b)
}

function operation(val1, val2, callback) {
  callback(val1, val2)
}

operation(16, 4, divide)

console.log('End')


