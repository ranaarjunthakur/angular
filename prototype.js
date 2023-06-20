///////////////////// Inherit values from another objects called prototype.////////////////////////////////////

let obj ={
   greet : () => "Hello i am Balaji.",  
}

let user = {
    name : "Balaji",
    age : 23,
}; 

let employee ={
    name : "Vikram",
    age : 44,
}

user.__proto__ = obj
employee.__proto__ = obj


console.log(user.greet())
console.log(employee.greet())
