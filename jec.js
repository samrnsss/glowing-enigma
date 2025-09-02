//JAVASCRIPT EXECUTION CONTEXT
//It means how the code is executed in JavaScript
//There are two phases of execution
//1. Creation Phase
//2. Execution Phase
//In creation phase, memory is allocated for variables and functions
//In execution phase, code is executed line by line
//In both phases, the scope chain is created



//GLOBAL EXECUTION CONTEXT
//In scope chain, the JavaScript engine looks for variables and functions in the current scope, then in the outer scope(global scope{}), and so on
//in browser, the global scope is the window object and this value is accessible from anywhere in the code
//works on single-threaded, non-blocking asynchronous programming



//FUNCTION EXECUTION CONTEXT
//In function execution context, a new scope is created
//This scope is created for each function call
//In this scope, the function's parameters and variables are stored
//When the function is called, the JavaScript engine looks for variables and functions in the current scope, then in the outer scope, and so on



//EVAL EXECUTION CONTEXT
//In eval execution context, the code is executed in the scope where the eval function is called.
//it runs in two phases: 1) memory creation phase and 
// 2) execution phase.


//(A) global execution context or global environment runs and allocated through this .
//(B)next its memory creation phase runs and allocates memory for all variables and functions. 
// like val1 -> undefined 
//  val2 -> undefined
//  then addNumbers -> function definition
//result1 -> undefined
//result2 -> undefined
// (C) then execution phase runs line by line and assigns values to variables and executes functions
//like val1 <- 10
// val2 <- 20
// addNumbers <- function call       //here new variable environment is created + execution context and again its memory phase  will allocate
//  val1 -> undefined val2 -> undefined total -> undefined then move to execution phase in which num1 -> 10 and num2 -> 20 and total -> 30 and most importantly after executing all this will delete
//then return 30 to result1
//again a new variable environment is created for the second function call where memory phase , exectution phase 
// result2 <- 70     // addNumbers(30, 40)

//call stack ... after executing it will pop and the other function will return according to LIFO it means last function called will be the first one to return

let val1 = 10;
let val2 = 20;
function addNumbers(num1, num2) {
    let total = num1 + num2;
    return total;
}
let result1 = addNumbers(val1, val2);
let result2 = addNumbers(30, 40);
console.log(result1, result2);   //30 70