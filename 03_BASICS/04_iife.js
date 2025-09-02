//IMMEDIATELY INVOKED FUNCTION EXPRESIONS (IIFE)

// (function ChannelSplitterNode(){
//     console.log(`DB CONNECTED`);
// })();                   //semicolon is used because it is a complete statement and to end it ....it will give error without it

// //ANONYMOUS FUNCTION (IIFE)
// ( () => {
//     console.log(`DB CONNECTED`);
// })()



// ******************************************

((name) => {
    console.log(`DB CONNECTED to ${name}`)
})('yourname')
