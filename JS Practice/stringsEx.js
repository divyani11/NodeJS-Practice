const text = 'Welcome to Javascript';
const characterCount = text.length;

console.log(characterCount); //21

let myName = 'Divya'
//myName = myName.toUpperCase();
console.log(myName.toUpperCase());

const str1 = 'Hello';
const str2 = 'World';

console.log(str1.concat('', str2, '!'));
// expected output : "Hello World!"

console.log(str1.concat(str2));
// expected output : "HelloWorld"

console.log(str2.concat(',' ,str1));
// expected output : "World, Hello"

var position = str1.charAt(0);
console.log(position);

console.log(str1.charAt(str1.length -1));
console.log(str1.length);
//hello