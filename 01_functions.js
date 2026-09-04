// function sayMyName(){
//     console.log("C");
//     console.log("A");
//     console.log("K");
//     console.log("E");
// }
// //sayMyName is referenced
// //sayMyName(); is function expression
// sayMyName(); //calling, running, invoking the function
// *************************************************

//add two numbers
//num1 and num2 are parameters and arguments are the values passed to the function
// function addTwoNumbers(num1, num2) {
//     console.log(num1 + num2);
// }
// addTwoNumbers(4, 5); //9
// addTwoNumbers(4, "5"); //45
// addTwoNumbers("4", "5"); //45
// addTwoNumbers("4", 5 ); //45
// addTwoNumbers(4, null); //4
// addTwoNumbers(4); //NaN
// const result = addTwoNumbers(4, 5);
// console.log(result); //undefined

//*********************************************

//proper method

// function addTwoNumbers(num1, num2) {
//     let result = num1 + num2;
//     return result;
// }
// const result = addTwoNumbers(4, 5);
// console.log("Result:",result); //9

//or

// function addTwoNumbers(num1, num2) {
//     return num1 + num2;
// }
// const result = addTwoNumbers(4, 5);
// console.log("Result:",result); //9

// **********************************************

// function loginUserMessage(username) {
//     return `${username} has logged in.`;
// }
// console.log(loginUserMessage("ABHASH")); //ABHASH has logged in.
// console.log(loginUserMessage("")); // has logged in.
// console.log(loginUserMessage()); //undefined has logged in.

// ***********************************************************

// function loginUserMessage(username) {
//     if(username === undefined){
//         console.log("Please enter a username");  //run only when its true
//         return
//     }
//     return `${username} has logged in.`
// }
// console.log(loginUserMessage())

// ************************************************************


// function loginUserMessage(username) {
//     if(username === undefined){
//         console.log("Please enter a username");
//         return
//     }
//     return `${username} has logged in.`
// }
// console.log(loginUserMessage())