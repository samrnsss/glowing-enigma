// const score = 400
// console.log(score)

// const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString());
// console.log(balance.toString().length);// 3 for 100
// console.log(balance.toFixed(3));     // 100.000

// const otherNumber = 1123.8966
// console.log(otherNumber.toPrecision(4));

// const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN')); //CHANGES TO INDIAN SYSTEM


//*******************MATHSS******************* */

// console.log(Math);
// console.log(Math.PI);
// console.log(Math.sqrt(16));
// console.log(Math.abs(-10));


console.log(Math.random());          //always in between 0 and 1
console.log(Math.random()*10);      //always in between 0 and 10
console.log((Math.random()*10) + 1); //always in between 1 and 11
console.log(Math.floor(Math.random()*10) + 1);   //integer between 1 and 10



const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max - min + 1)) + min);

// console.log(Math.round(14.2));           //14(roundoff)
// console.log(Math.ceil(14.1));           //15(next top value )
// console.log(Math.floor(14.9));          //14(next bottom value)
// console.log(Math.min(2,3,4,5,-10,6));  //-10
// console.log(Math.max(2,3,4,5,-10,6));  //6
