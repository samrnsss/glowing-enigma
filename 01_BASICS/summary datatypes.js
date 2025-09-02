//#primitive datatypes
//7 types of primitive datatypes
// 1. string
// 2. number
// 3. boolean
// 4. null
// 5. undefined
// 6. symbol
// 7. bigInt

// const score = false
// const scoreValue = 100.3

// const isLoggedIn = false 
// const outsideTemp = null
// let userEmail;

// const id = Symbol('123')
// const anotherId = Symbol('123')

// console.log(id === anotherId); //false

// const bigNumber = 123456789012345678901234567890n


//REFERENCE TYPE(non-primitive )
//Array , Objects , functions

// const heroes = [ "shaktiman ","naagraj","doja"];
// let myObj = {
//     name : "sam",
//     age : 20,
// }
// const myFunction = function(){
//     console.log("Hello World");
// }

// console.log(typeof scoreValue);    //number
// console.log(typeof bigNumber);     //bigint
// console.log(typeof outsideTemp);   //object
// console.log(typeof anotherId);     //symbol


//***************************************************
//stack memory (primitive)
//heap memory (non- primitive)

// let myYoutubename = "samreenbano"
// let anotherName = myYoutubename
// anotherName = "chai aur code"

// console.log(myYoutubename);
// console.log(anotherName);
export let userOne = {
    email: "sam@gmail.com",
    UPI: "user@ybl"
}
let userTwo = userOne
userTwo.email = "USER@gmail.com"
console.log(userOne.email);
console.log(userTwo.email);
