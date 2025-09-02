const name ="sam"
const repoCount = 50 

console.log(`hello my name is ${name} and I have ${repoCount} repositories`)

const gameName = new String('mesam')
console.log (gameName[0]);
console.log (gameName.__proto__);

console.log (gameName.length) ;
console.log (gameName.toUpperCase()) ;
console.log (gameName.charAt(2)) ;
console.log (gameName.indexOf('m')) ;

const newString = gameName.substring(0,3);
console.log(newString);


const anotherString = gameName.slice(-2,4);
console.log(anotherString);

const newString2 = "    samreen    "
console.log(newString2);
console.log(newString2.trim());

const url = "https://www.example.com/sam%20example";
console.log(url.replace('%20', '-'))
console.log(url.includes('sam'));
console.log(url.includes('bano'));


console.log(gameName.split('-'));
console.log(gameName.split('sam'));