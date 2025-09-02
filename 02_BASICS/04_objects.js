// *****************************************************************************//
// const tinderUser = new Object();

//******************************************************************************//

// const tinderUser = {};
// tinderUser.id = "123abc";
// tinderUser.name = "Alex";
// tinderUser.isLoggedIn = true;
// console.log(tinderUser);

//****************************************************************************//

// const regularUser = {
//     email: "samantha@example.com",
//     fullname: {
//         names: {
//             firstName: "Samantha",
//             lastName: "Smith"
//         }
//     }
// }
// console.log(regularUser.fullname.names);

// ******************************************************************************

// const obj1 = {1: "a", 2: "b"};
// const obj2 = {3: "a", 4: "b"};
// const obj3 = {5: "a", 6: "b"};
// const obj4 = Object.assign({}, obj1, obj2, obj3)   //with curly bracket 
// const obj5 = Object.assign(obj1, obj2)        //also same output without curly brackets 
// console.log(obj4);  
// console.log(obj5);
// const obj6 = {...obj1, ...obj2, ...obj3}   //using spread operator
// console.log(obj6);

//********************************************************************************

// const users = [
//     {
//         id: 1,
//         name: "John Doe",
//         email: "john@example.com"
//     },
//     {
//         id: 2,
//         name: "Jane Smith",
//         email: "jane@example.com"
//     }
// ]
// users[1].email

// ******************************************************************************

// const tinderUser = {};
// tinderUser.id = "123abc";
// tinderUser.name = "Alex";
// tinderUser.isLoggedIn = true;
// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));
// console.log(tinderUser.hasOwnProperty("name")); 
// console.log(tinderUser.hasOwnProperty("age"));

//******************************************************************************

// const course ={
//     coursename : "JS in hindi",
//     price : 299,
//     courseInstructor : "sammie"
// }
// console.log(course.courseInstructor);     // "sammie"

// const {courseInstructor} = course;   //object destructuring
// const {courseInstructor: instructor} = course; 
// console.log(instructor);             // "sammie"

//*****************************************************************************

// const navbar = ({company}) => {                  //destructuring
//     console.log(company);
// }
// navbar({company: "ash"})

//**************************************************************************** */
//json syntax
// {
//     "name": "ash",
//     "coursename": "js in hindi",
//     "price": "free"
// }
//use json formatter for better readability

// ****************************************************************************
[
    {},
    {},
    {}
]