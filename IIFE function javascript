It is a JavaScript function that runs as soon as it defined. An IIFE (Immediately Invoked Function Expression) can be used for avoiding the variable
hoisting from within the blocks. It allows the public access to methods while retaining the privacy for variables defined in the function.


////////////////////Syntax//////////////////

(function ()   
{  
    statements  
})();  
  
// Syntax of IIFE with ES6 arrow functions (though parentheses only allowed on outside)  
  
(() => { /* ... */ })();   



(() => {
  const message = "Hello, I am Sam Smith";
  console.log(message);
})();


(function() {
  const message = "Hello, I am Sam Smith";
  console.log(message);
})();


//////////////////////////////

let sum = (function(a,b){
    return a + b;
})(10, 20);

console.log(sum);


////////////Also, you can pass arguments in IIFE as shown below////////////////////////

var userName = "Bill";

(function (name) {

    function display(name)
    {
        alert("MyScript2.js: " + name);
    }

    display(name);
})(userName);
