// JS Objects

/*
JS - is it an OOP Language?  Kinda.
didn't used to be but now CAN be.
Now it's POSSIBLE to write OOP JS code.
the 2 main types of objects:
Simple - dictionary
Object Prototypes - like a class in python
*/

// simple object
let animal = {
   species: "Bald Eagle",
   age: 45,
   color: 'brown white'
};

// accessing properties
//brackets
console.log(animal['age']);
// dot notation
console.log(animal.age);

// add k/v

animal['name'] = 'America';
console.log(animal.name);

// deleting
//python del
// in js we just type delete
// delete animal.name;
console.log(animal)

// time to take it up a notch- a more complex object!
let animals = {
   eagles: {
       'Bald' : {
           prey : ['fish', 'mice'],
           flies : true
       },
       'Golden' : {
           prey : ['squirrels'],
           flies : true
       }
   },
   cats : ['osprey', 'tiger', 'house'],
   dogs : 'Fido'
};

console.log(animals.eagles.Golden.prey[0]);
console.log(animals['eagles']['Golden']['prey'][0]);


console.log("\nLOOPING:");
// looping through objects!
// in short- pretty much the same as python

for (property in animal){
   console.log(property);
}

// dict.keys() and dict.values() --Python
// Object.keys(<object>)
// Object.values(<object>)
// returns an array of keys or values
console.log(Object.keys(animal));
// equivalent to animal.keys() in python
console.log(Object.values(animal));

let vals = Object.values(animal);
for (let i = 0; i<animal.length; i++){
   console.log(vals[i])
};

console.log("\nCUSTOM OBJJECT PROTOTYPES")
// Custom object prototypes. . . aka classes
// 3(ish) ways because this is JS, 1 way is never enough

function Dog(name, breed, color, tail=true){ //ES5 syntax. . . 
   this.name = name;
   this.breed = breed;
   this.color = color;
   this.tail = tail;

   this.printInfo = function(){
       console.log(`This is a dog (it's a ${color} ${breed}) named ${name}`)
   };
}

// instantiating!
// new keyword. . .  NEW
let myDog = new Dog('Isis', "Black Lab", "Black");
myDog.printInfo();

// class based object
class DogC {
   constructor(name, breed, color, tail=true){
       this.name = name;
       this.breed = breed;
       this.color = color;
       this.tail = tail;
   }
   // since we have a constructor we need to be in this portion of the codeblock!
   printInfo(){
       console.log(`This is a dog (it's a ${this.color} ${this.breed}) named ${this.name}`)
   };
}

let classyDog = new DogC('Fido', 'Pittie', 'Brindle', false);
classyDog.printInfo();

// Inheritance in JS:
class Lab extends Dog{
   constructor(name, breed, color, tail=true){
       super(name, breed, color, tail=true);
       this.loyal = 'Loyal!';
       this.lazy = true;
   };
   checkLoyal(){
       this.loyal += "I'm very, very loyal!";
       console.log(this.loyal)
   };
}

let aLab = new Lab('Lassie', 'Lab', 'yellow');
aLab.printInfo();
aLab.checkLoyal();

// func based object with arrow func methods

function ArrowDog(name, breed, color, tail=true){
       this.name = name;
       this.breed = breed;
       this.color = color;
       this.tail = tail;

       this.printInfo = () => {
           console.log(`This is a dog (it's a ${this.color} ${this.breed}) named ${this.name}`)
       };
}
let nextDog = new ArrowDog('Spot', 'lab', 'white');
nextDog.printInfo();

console.log("\n Callbacks:")

// callbacks:
// a function that executes after another function has executed
// to make a pizza - pullPizzaOut() after cookPizza() after preHeatOven()
// pullPizzaOut(cookPizza(preHeatOven())) -conceptually

/*
In JS functions are objects. functions can take other functions as arguments(parameters), 
and can return functions by other functions!
Higher order functions- these are the ones getting funcs passed to them
callback function- any func passed as input to another
Do this exist in Python?  Yes, but they are not as nearly as common.  For examples 
I would think of places a lambda function is commonly used ie map/filter/sort.
*/

let first = () => {
   setTimeout(()=>(console.log(1)), 4000);
}

let second = () => {
   console.log(2);
}


first();
second();

// let attendClass = (subject, callback) => {
//     alert(`Attending ${subject} class!`);
//     callback();
// }

// let endClass = () => {
//     console.log('Class is over!');
// }
// endClass(attendClass('math', endClass));


/* callback hell!
function1( () => {
   function2( ()=> {
       function3( ()=>{
           function4( ()=>{
               'ugh'
           })
       })
   })
})
*/

// The solution is promises!

let isEven = (num) => {
   return new Promise((resolve, reject)=>{
       if (num%2 == 0){
           resolve(num);
       } else {
           reject(num);
       }
   })
}

// call the func using the promise with .then() and .catch()
// .then() reps resolve
// .catch() reps reject

isEven(44)
.then( (result) => {
   console.log(`It's an even num- ${result}.`);
}).catch( (result) => {
   console.log(`Odd num- ${result}`);
});


// the more modern approach 
// async await syntax

let increaseSlow = (base, increase) => {
   return new Promise( (resolve) => {setTimeout( () => resolve(base + increase), 2000)});
};

let giveRaise = async (salary, raise) => {
   let newSalary = await increaseSlow(salary, raise);
   // AWAIT the results of the promise
   console.log(`This is your new salary: ${newSalary}`);
}

giveRaise(50000, 10000)

// JS Closure

/*
a self-invoking function that can then be set to a variable
and return a function expression
*/

let count_up = ( function () {
   let counter = 0; // this is our PRIVATE variable
   return function () {console.log(counter++)}
})()
count_up();
count_up();
count_up();
count_up();
// console.log(counter)

let addNames = ( () => {
   let names = [];
   console.log('Adding Names');
   return (nam) => {
       names.push(nam);
       console.log(names)
   }
})()
addNames('George');
// console.log(names)
addNames('Bill');
addNames('Sue');
// console.log(names)