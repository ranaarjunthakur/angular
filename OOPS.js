////////////////////////////////  1- Class & Inheritance ///////////////////////////////


class Animal{
    constructor(name,age){
        this.name=name;
        this.age=age
    }
    
    getInfo(){
        return (`${this.name} ${this.age}`)
    }
}


class Dog extends Animal{
    constructor(name,age,breed){
         super(name,age)
         this.breed= breed
    }
    
    bark(){
        return 'woof'
    }
}



////////////////////////////////  Encapsulation /////////////////////////////////////////////////


class Cat extends Animal{
    #weight;                  // mark as private  (Encapsulation)
    constructor(name,age,weight){
        super(name,age)
        this.#weight= weight
    }
    
    getWeight(){                  // getter
        return this.#weight
    }
    
    setWeight(weight){             //setter
        this.#weight= weight
    }
}

const firstAnimal = new Animal("rex" ,2)
console.log(firstAnimal)
console.log(firstAnimal.getInfo())

const secondAnimal = new Animal("Barney",5)
console.log(secondAnimal)
console.log(secondAnimal.getInfo())

const myDog = new Dog("jakkie",10,'german shephard')
console.log(myDog)
console.log(myDog.getInfo())
console.log(myDog.bark())


const myCat = new Cat("whhilley",3,'5Kg')
console.log(myCat)
console.log(myCat.getWeight())      // 5kg
myCat.setWeight('6kg')
console.log(myCat.getWeight())     //6kg
console.log(myCat.getInfo())


/////////////////////////////////Polymorphism////////////////////////////////////////////









