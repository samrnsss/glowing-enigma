// const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9,10];
// const newMyNumbers = myNumbers.map((num) => num + 4);
// console.log(newMyNumbers);
// // const addMyNumbers = myNumbers.map((num) =>{return num + 10})
//     // console.log(addMyNumbers);

// ************************************************************************

// const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const newNums = myNumers
//             .map((num) => num * 10 )
//             .map((num) => num * 10)
//             .map((num) => num + 1)
//             .filter((num) => num >=400)
// console.log(newNums);

// *******************************************************************************

//reduce
// const myNumbers = [1, 2, 3]
// const addMyNumbers = myNumbers
//                 .reduce((accumulator, current) => accumulator + current , 0) 
// // accumulator means the running total, current means the current value being processed
// console.log(addMyNumbers);

// ***************************************************************************

// const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const addMyNumbers = myNumbers.reduce((accumulator, current) => accumulator + current , 0) 
// // accumulator means the running total, current means the current value being processed
// console.log(addMyNumbers);

// ***************************************************************************

// const myNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const myTotal = myNum
//             .reduce(function(accumulator, current) {
//                 console.log(`acc: ${accumulator} and curr: ${current}`);
//                 return accumulator + current

//             }, 0)

// console.log(myTotal);


// *************************************************************************


// const myNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const myTotal = myNum
//                     .reduce((accumlator,current) => accumlator +current,0)
// console.log(myTotal);


// ************************************************************************

//syntax:  const <variableName> = <array>.reduce((accumulator, current) => { ... }, initialValue)
//console.log(<variableName>)

const shoppingCart = [
    { 
        id: 1, name: "Laptop", price: 80000 
    },
    { 
        id: 2, name: "Phone", price: 50000 
    },
    { 
        id: 3, name: "Tablet", price: 30000
    }
]
const priceToPay = shoppingCart
                            .reduce((acc , item) => acc + item.price, 0)
console.log(priceToPay);