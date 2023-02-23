///////////All JavaScript objects inherit properties and methods from a prototype.//////////////////

function user(name,age){
    this.name= name;
    this.age = age;
}


user.prototype.data = function(){
    return this.age + " " + this.name
}

let res = new user("arjun",24)
console.log(res.data())  => 24 arjun

