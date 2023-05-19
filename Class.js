class angularDeveloper{
    
    static #takenName=[]
    
    static isTakenName(name){
        return angularDeveloper.#takenName.includes(name)
    }
    
    #city;
    #nameValue;
    
    constructor(name,age,city){
        this.name=name
        this.age =age
        this.#city=city // (#) Private field Access in Body of Class
        
        angularDeveloper.#takenName.push(this.name)
    }
    
    get name(){                       //  getter => get a name //
        return this.#nameValue;
    }
    
    set name(name){
        if(name==""){
              throw new Error('name field of User cannot be empty');
        }
          this.#nameValue = name;
    }
    
    getCity(){
        return this.#city
    }
}


class ReactDeveloper extends angularDeveloper {
    posts = [];
    
    constructor(name,age,city,posts){
     super(name,age,city)
     this.posts=posts;
    }
}

let NewDeveloper = new angularDeveloper('Arjun','23','Noida');
console.log(NewDeveloper)
console.log(NewDeveloper.name) //The getter is invoked, => 'Arjun'
NewDeveloper.name = 'Jon White'; //The setter is invoked
console.log(NewDeveloper.name) //The setter is invoked,=>'JohnWhite'
console.log(NewDeveloper.getCity()) // => return City Noida 
console.log(NewDeveloper.city)  // =>undefined  bcoz of private (#)

console.log(angularDeveloper.isTakenName('Arjun')) // true
console.log(angularDeveloper.isTakenName('Jon'))   // false


let NewReactDeveloper = new  ReactDeveloper('Akki','24','Noida',['Why I like JS'])
console.log(NewReactDeveloper)



