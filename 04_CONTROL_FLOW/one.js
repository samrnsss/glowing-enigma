//if

    // if (true) {
    //     // code to be executed if condition is true
    // }
    // if (false) {
    //     // code not to be executed if condition is false
    // }


// *******************************************/

// const isUserLoggedIn = true;

// if (isUserLoggedIn) {
//     // code to be executed if user is logged in
//
//     console.log("executed");
// }

// ***********************************************************

// const temperature = 41
// if (temperature === 40) {     //=== is used to check both value and type
//     // code to be executed if condition is true
//     console.log("temperature is less than 50");
// }else{
// console.log("temperature is greater than 50");
// }

// ***********************************************************

// const score = 200
// if (score > 200) {
//     const power = "fly"
//     console.log(`user power: ${power}`);
// }
//     console.log(`User power: ${power}`);  //BLOCK SCOPE

//************************************************************

// const balance = 1000
// if(balance>500) console.log("test")  //executes in one line only
// console.log("test2")


/////////////////////////////////////////////////////////////

// const balance = 1000
// if (balance < 500){
//     comsole.log("less than 500");
// }else if (balance < 750){
//     console.log("less than 750");
// }else {
//     console.log("less than 1200")
// }


/////////////////////////////////////////////////////////////
// const isUserLoggedIn = true 
// const debitCard = true

// if (isUserLoggedIn && debitCard) {//to print both need to be true
//     console.log("User can make a purchase");
// }

//******************************************************* */
// const isUserLoggedIn = true 
// const debitCard = true
// const loggedInFromEmail = true

// if (isUserLoggedIn && debitCard) {//to print both need to be true
//     console.log("User can make a purchase");
// }
// if(loggedInFromGoogle || loggedInFromEmail){
//     console.log("User is logged in from Google or Email");
// }
// //here user is logged in from google and email will not print because loggedInFromGoogle is not defined


// *************************************************************

const userLoggedIn = true
const debitCard = true
if (userLoggedIn && debitCard && 2==2 ){    //here third statement is not defined but it also need to be true to get the output
    console.log("User can make a purchase");
}