//arrow function dont have their own this
// const user = {
//     username: "John",
//     price: 30,
//     welcomeMessage: function() {
//         console.log(`${this.username} , welcome to the website`);
        
//     }

// };

// user.welcomeMessage(); //John , welcome to the website
// user.username = "ABHASH";
// user.welcomeMessage(); //ABHASH , welcome to the website

///////////////////////////////////////////////////////////////

// const user = {
//     username: "John",
//     price: 30,
//     welcomeMessage: function() {
//         console.log(`${this.username} , welcome to the website`);
//         console.log(this);
//     }

// };

// user.welcomeMessage(); //John , welcome to the website
// user.username = "ABHASH";
// user.welcomeMessage(); //ABHASH , welcome to the website
///////////////////////////////////////////////////////////////

// function chai(){
//     let username = "John";  
//     console.log(this);
// }
// chai();                  //calls the global object

// ***********************************************************

// const chai = function(){
//     let username = "John";
//     console.log(this.username);
// }

// chai ()


/////////////////////////////////////////////////////////////////
//arrow functions
// const chai = () =>{
//     let username = "John";
//     console.log(this);
// }

// chai ()

// **************************************************************

//syntax arrow function () => {}

    // const addTwo = (num1 , num2) => (num1 + num2)   // //we can also execute without {return} using parenthesis
    // console.log(addTwo (3,4))

    //OR

    // const addTwo = (num1 , num2) => {           
    //     return num1 + num2                   
    // }
    // console.log(addTwo (3,4))

    // ***************************************************

// const addTwo = (num1 , num2) => ({username: "John"})    

// console.log(addTwo (3,4))                 //after one line space then write console.log

//************************************************************ */
// const myArray = [2, 5, 3, 4]
// myArray.forEach((element) => {
//     console.log(element)
// })


// **********************************************************
