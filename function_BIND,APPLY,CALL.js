/////////////////////With the bind() method, an object can borrow a method from another object.//////////////////////


let user1= {
    name:'arjun',
    age:24,
    details: function(){
        console.log("My Name Is" , `${this.name}  my age is ${this.age}`)
    }
}

let user2 ={
    name : 'raja',
    age:25
}

let res = user1.details.bind(user2)
res()


///////////////////////FUNCTION CALL METHOD/////////////////////////////////////

const person = {
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
}
const person1 = {
  firstName:"John",
  lastName: "Doe"
}
const person2 = {
  firstName:"Mary",
  lastName: "Doe"
}

// This will return "John Doe":
person.fullName.call(person1); =>takes arguments separately.

////////////////FUNCTION APPLY ////////////////////////////

The call() method takes arguments separately.

The apply() method takes arguments as an array.


const person = {
  fullName: function(city, country) {
    return this.firstName + " " + this.lastName + "," + city + "," + country;
  }
}

const person1 = {
  firstName:"John",
  lastName: "Doe"
}

person.fullName.apply(person1, ["Oslo", "Norway"]);  => take a argument as an array.


