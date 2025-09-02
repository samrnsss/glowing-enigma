// const coding = ["js", "html", "css", "rb", "cpp"]
// const values = coding.forEach((item) => {
//     console.log(item);    //undefined
// });

// ********************************************************


// const coding = ["js", "html", "css", "rb", "cpp"]
// const values = coding.forEach((item) => {
//     console.log(item);
//     return item;
// });
// console.log(values);

// ********************************************************

// const myNums = [1, 2, 3, 4, 5 , 6, 7, 8, 9];
// const newValues = myNums.filter((num) => num > 4 );   //filter (condition)
// console.log(newValues);

// ****************************************************************************

// const myNums = [1, 2, 3, 4, 5 , 6, 7, 8, 9];
// const newValues = myNums.filter((num) => {
//     return num > 4;
// });     //[] empty array
// console.log(newValues);

// ************************************************************************

// const myNums = [1, 2, 3, 4, 5 , 6, 7, 8, 9];
// const newNums = []
// myNums.forEach( (num) => {
//     if (num > 4) {
//         newNums.push(num)
//     }
// } )
// console.log(newNums);

// ***************************************************************************

// const books = [
//     { title: "Book 1", genre: "Fiction", publish: 2001 , edition: 5 },
//     { title: "Book 2", genre: "History", publish: 2002 , edition: 1 },
//     { title: "Book 3", genre: "science", publish: 2003 , edition: 3 },
//     { title: "Book 4", genre: "science", publish: 2004 , edition: 1 },
//     { title: "Book 5", genre: "novel", publish: 2005 , edition: 1 },
//     { title: "Book 6", genre: "Fiction", publish: 2006 , edition: 2 },
//     { title: "Book 7", genre: "non-fiction", publish: 2007 , edition: 1 },
//     { title: "Book 8", genre: "non-fiction", publish: 2008 , edition: 6 },
//     { title: "Book 9", genre: "novel", publish: 2009 , edition: 5 },
//     { title: "Book 10", genre: "history", publish: 2010 , edition: 4 }
// ];

// let historyBooks = books.filter((bk) => bk.genre === "history");
// let userBooks = books.filter((bk) => { 
//     return bk.genre === "history";
// }); 
// //either remove scope or use return keywords instead {}
// console.log(userBooks);