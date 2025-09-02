//for 
// for(let index = 1; index <= 5; index++) {
//         console.log(`value of i  : ${index}`);
//     }

// ***********************************************************/

// for (let index = 0; index < 10; index++) {
//     const element = index;
//     console.log(element);
// }


// **************************************************

// for (let i = 0; i <= 10; i++) {
//     const element = i;
//     console.log(element);
// }
// //do not write console.log outside the loop

// ***************************************************

// for (let i = 0; i <= 10; i++) {
//     const element = i;
//     if (element == 5) {
//         console.log("Found 5");
//     }
// }

// *****************************************************************

// for (let i = 0; i <= 2; i++) {
//     console.log(`outer loop value : ${i}`)
//     for (let j = 0; j <= 2; j++) {
//         console.log(`inner loop value : ${j} and inner loop ${i}`);
//     }
// }

// *******************************************************************************


// for (let i = 1; i <= 2; i++) {
//     console.log(`table of : ${i}`)
//     for (let j = 1; j <= 10; j++) {
//         console.log(i + '*' + j + '=' + (i * j));
//     }
// }


// ******************************************************************************


// let myArray = ["hulk", "thor", "ironman"];                 //if i++ is not used here instead i is used then it will fall into infinite loop
// for (let index = 0; index < myArray.length; index++) {       //we have not used <= because < allows us to avoid off-by-one errors and <= will return undefined
//     const element = myArray[index];
//     console.log(element);
// }


// *******************************************************************************


//break and continue

// for(let index = 1; index <= 5; index++) {
//         if(index == 3){
//             console.log("Found 3");
//             break;
//         }
//         console.log(`value of i  : ${index}`);
//     }

// ****************************************************************************

// for(let index = 1; index <= 5; index++) {
//         if(index == 3){
//             console.log("Found 3");
//             continue;                    //print all values <=5
//         }
//         console.log(`value of i  : ${index}`);
//     }
