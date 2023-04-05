//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/


//  person3 = { 'pizza':['Deep Dish','South Side Thin Crust'],
// 'tacos':'Anything not from Taco bell',
// 'burgers':['Portillos Burgers'],
// 'ice_cream':['Chocolate','Vanilla','Oreo'],
// 'shakes':'Chocolate','dunkin':'Vanilla','culvers':'All of them',
// 'mcDonalds':'Sham-rock-shake','cupids_candies':'Chocolate Malt'
// };

// let vals = Object.entries(person3);
// for (let i = 0; i<person3.length; i++){
//    console.log(vals[i])
// };
// person3 = { 'pizza':['Deep Dish','South Side Thin Crust'],
// 'tacos':'Anything not from Taco bell',
// 'burgers':['Portillos Burgers'],
// 'ice_cream':['Chocolate','Vanilla','Oreo'],
// 'shakes':'Chocolate','dunkin':'Vanilla','culvers':'All of them',
// 'mcDonalds':'Sham-rock-shake','cupids_candies':'Chocolate Malt'
// };
// function display_object(person3) {
//     for (key, value; {
//         console.log(key, ':pizza', value);
// console.log(person3);

//     }
// };

// function display(pizza, tacos=true){
    
//     this.pizza = pizza;
//     this.tacos = tacos;

//     this.printInfo = () => {
//         console.log(`This is a dog (it's a ${this.pizza} ${this.tacos}) named ${this.pizza}`)
//     };
// }



//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
// 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype
// since we have a constructor we need to be in this portion of the codeblock!
   
 
// Use an arrow to create the printInfo method

// Create another arrow function for the addAge method that takes a single parameter
// Adding to the age

function human(name, age=age){ //ES5 syntax. . . 
    this.name = name;
    this.age = age;
 
    this.printInfo = () =>{
        console.log(`This is ${this.name}and his age is ${this.age}`)
    };
 }
 
 // instantiating!
 // new keyword. . .  NEW
 let myDog = new human('Bob', 45);
 myDog.printInfo();
 
 // class based object
 class DogC {
    constructor(name, age=true){
        this.name = name;
        this.age = age;
    }
    // since we have a constructor we need to be in this portion of the codeblock!
    printInfo(){
        console.log(`This is a dog (it's a ${this.name} ${this.age}) named ${this.name}`)
    };
 }
 
 
 // Inheritance in JS:



 // =============Exercise #3 ============//
/*
    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word".
    If the length of the string is less than 10 console log "Small Number"
*/
let isEven = (num) => {
    return new Promise((resolve, reject)=>{
        if (num > 10 ){
            resolve(num);
        } else {
            reject(num);
        }
    })
 }
 isEven(44)
.then( (result) => {
   console.log(`'Big Word'- ${result}.`);
}).catch( (result) => {
   console.log(`'small number'- ${result}`);
})