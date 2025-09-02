// let a = 10;
// const b = 20;
// var c = 30;

// console.log(a);                 // 10
// console.log(b);                 // 20
// console.log(c);                 // 30


// *********************************


// if(true){
//     let a = 20;
//     const b = 30;
//     var c = 40;
// }

// // console.log(a);     //error
// // console.log(b);     //error
// console.log(c);       // 40


// ********************************************

// var c = 50;                       //global scope
// let a =10;
// if(true){                             //block scope
//     const b = 30;
//     var c = 40;
//     console.log("INNER: ", a);

// }
// console.log(c);       // 40
// // console.log(b);
// console.log(a);       // 10

//*********************************************************
//when {} comes with a function , loop , conditional statement then it is called as scope of that function , loop , conditional statement
//scope means the visibility or accessibility of variables
//global scope is the space outside of any function or block
//block scope is the space within a block, such as an if statement or a loop
// let a = 300
// if(true){    
//     let a = 10                         //block scope
//     const b = 30;
//     console.log("INNER: ", a);
// }
// console.log(a);

//*************************************************************/

// nested scope
// function one() {
//     const username = "John";
//     function two() {
//         const website = "youtube";
//         console.log(username);
//     }
    
//     two();
// }
// one();                 //one() will call two() and print username

/////////////////////////////////////////////////////////////////


// if (true) {
//     const username = "John";
//     if (username === "John") {
//         const website = "youtube";
//         console.log(username +" " + website);
//     }
//     // console.log(website); // error (no need to access)
// }
// // console.log(username); // error (no need to access)


//===============================================================
/////////////////INTERESTING EXAMPLES///////////////////////////

// function addOne(num) {
//     return num + 1;
// }
// console.log(addOne(5));    // 6

// // or

// const addTwo = function (num) {   // function expression
//     return num + 2;
// }
// addTwo(5);  //it is also a function expression


