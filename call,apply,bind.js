////////////OLD WAY/////////////////

const bird = {
  name: "Sparrow",
  makeSound() {
    console.log(`${this.name} goes chirp`)
  },
};

const insect = {
  name: "Cricket",
  makeSound() {
    console.log(`${this.name} goes chirp`)
  },
};

bird.makeSound();
insect.makeSound();


///////////////////CALL METHOD//////////////////////


const bird = { name: "Sparrow" };

const insect = { name: "Cricket" };

const makeSound = function () {
  console.log(`${this.name} goes chirp`);
}

makeSound.call(bird);
makeSound.call(insect);

////////////////////////////////

const user = { name: "Oliver Smith" };

const project = { name: "BB Academy" };

const displayGreeting = function (projectName) {
  console.log(`Hi, I am ${this.name}. I am working on ${projectName}`);
}

displayGreeting.call(user, project.name);

/////////////////////APPLY METHOD////////////////////////////

* The apply() method accepts two arguments.
* The object for the this keyword used inside the function invoked to refer to.
* An array of elements that will be passed as arguments to the function invoked.


const admin = { name: "Adam Smith" };
const user = { name: "Oliver Smith" };

function displayIntro(greetings, details) {
  console.log(`${greetings} I am ${this.name}. ${details}`);
}

displayIntro.apply(admin, ["Hi.", "I am the admin."]);
displayIntro.apply(user, ["Hello!", "I am 23 years old."]);

///////////////////BIND METHOD//////////////////

const admin = { name: "Sam Smith" };

function displayName() {
  console.log(`Hi. I am ${this.name}.`);
}

const displayAdminName = displayName.bind(admin);

displayAdminName();
