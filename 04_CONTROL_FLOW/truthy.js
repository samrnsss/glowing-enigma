//truthy of falsy values

// const userEmail = []  //here we have not defined userEmail but still the compiler will print first condition "got user email"
// if (userEmail) {
//     console.log ("Got user email");
// }else {
//     console.log("dont have user email")
// }

// ************************************************************

// falsy values are  0 ,-0 ,false , bigInt 0n , null , undefined , NaN
//AND remaining all values are truthy values 
//truthy values like true , 1 , 0n , "string", [], {} , "0" , 'false' , function(){}  , " "  ,

// if (userEmail.length === 0) {  //here userEmail is an array and its length is 0 so it will go to else part
//     console.log("array is empty");
// }

// *************************************************************


// const emptyObj = {}

// if (Object.keys(emptyObj).length === 0) {
//     console.log("object is empty");
// }

//***********************************************************

// const userEmail = " "  //here userEmail is a string with space so it will go to if part

//******************************************************** *

//Nullish Coalescing operator (??): null undefined
//syntax:  let variable = value1 ?? value2;

// let val1;
// val1 = 5 ?? 10;
// console.log(val1);  //it will print 5 because val1 is undefined so it will take the left side value

// ///but  but but but...

// let val1;
// val1 = null ?? 10;
// console.log(val1);  //it will print 10 because val1 is null so it will take the right side value
// let val2;
// val2 = 5 ?? null;
// console.log(val2);  //it will print 5 because val2 is not null or undefined so it will take the left side value
// let val3;
// val3 = undefined ?? 10;
// console.log(val3);  //it will print 10 because val3 is undefined so it will take the right side value
// let val4;
// val4 = null ?? 10 ?? 20;
// console.log(val4);  //it will print 10 because val4 is null so it will take the next value



// *******************************************************************************

//TERNARY OPERATOR
//syntax:    condition ? true : false

// const iceTeaPrice = 100
// iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")




//SUMMARY
//&& MEANS AND
//|| MEANS OR
//! MEANS NOT
//SWITCH MEANS CASE
//?? MEANS NULLISH COALESCING OPERATOR
