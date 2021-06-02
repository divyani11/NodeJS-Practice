const numberAsString = '3';

console.log(typeof numberAsString) //string

const number = parseInt(numberAsString);

console.log(number); //3

console.log(typeof number)  //number

var total = number + 5; // 8
var strTotal = numberAsString +5 ;   //35
console.log(`Total : ${total} strTotal : ${strTotal}`);

//ParseFloat

const piAsText = '3.14';
const pi = parseFloat(piAsText);
console.log(pi);