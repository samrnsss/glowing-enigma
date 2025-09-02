//to run this file => node 02_BASICS.js/arrays.js
//ARRAY

// const myArr = [0, 1, 2, 3, 4, 5];
// const myHeroes = ["Superman", "Batman", "Wonder Woman"];

// console.log(myArr);
// console.log(myArr[0]);
// console.log(myHeroes);





// const myArr2 = new Array (6, 7, 8, 9, 10);
// // console.log(myArr2[3]);
// myArr2.push(11);                              //it will push 11 to the last 
// myArr2.pop();                                //it will remove the last element
// myArr2.shift();                             //it will remove the first element
// myArr2.unshift(5);                         //it will add 5 to the first element
// console.log(myArr2);


// const myArr3 = [1, 2, 3, 4, 5];
// console.log(myArr3.includes(9));
// console.log(myArr3.indexOf(4));

// console.log(myArr3);


// const myArr = ["Hello", "World", "This", "is", "JavaScript"];
// const newArr = myArr.join();
// console.log(newArr);
// console.log(typeof newArr);



//slice , splice
const myArr = [0, 1, 2, 3, 4, 5];
console.log("A =", myArr);
//slice (1,4) includes index 1 to 3
const myn1 = myArr.slice(1, 4);          //it will not change the original array
console.log(myn1);
console.log("B =", myArr);

const myn2 = myArr.splice(1,3)
console.log("C =", myArr);
console.log(myn2);