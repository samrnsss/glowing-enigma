const accountId = 12345;
let accountEmail    = "sam@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;

// accountId = 2 //not allowed


accountEmail = "john@gmail.com"
accountPassword = "54321"
accountCity = "Delhi"
console.log(accountId)



// prefer not to use var 
//because of issue in block scope and function scope


console.table([accountId, accountEmail ,accountPassword, accountCity, accountState]);