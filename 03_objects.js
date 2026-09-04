//singleton => object with single value
//object.create(proto, propertiesObject)

// ****************************************************************
// const mySym = Symbol("key1")

// const JsUser = {
//     name : "sammie",
//     "fullName" : "sammie kumar",
//     // [mySym] : "mykey1",
//     age : 18,
//     location: "mumbai",
//     email: "sammie@example.com",
//     isLoggedIn: false,
//     lastLoginDays :["Monday", "Tuesday", "Wednesday"]
// };

// console.log(JsUser);
// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["fullName"]);
// console.log(JsUser[mySym]);
// console.log(typeof JsUser[mySym]);
// console.log(JsUser.lastLoginDays[1]);

// JsUser.email = "sammie.kumar@example.com";
// Object.freeze(JsUser);
// JsUser.email = "samreenbano@example.com";
// console.log(JsUser.email);
// ***************************************************************





//************************************************************/
const JsUser = {
    name : "sammie",
    "fullName" : "sammie kumar",
    age : 18,
    location: "mumbai",
    email: "sammie@example.com",
    isLoggedIn: false,
    lastLoginDays :["Monday", "Tuesday", "Wednesday"]
};

JsUser.greeting = function() {
    console.log("Hello, greetings from JsUser");
};
console.log(JsUser.greeting());  //Hello, greetings from JsUser
console.log(JsUser.greeting);   //function anonymous


JsUser.greeting2 = function() {
    console.log(`Hello JsUser , ${this.name}`);
};
console.log(JsUser.greeting2());  //Hello JsUser , sammie

/*************************************************************/ 

