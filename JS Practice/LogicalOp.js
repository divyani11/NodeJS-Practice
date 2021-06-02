// || OR
// && AND
// ! NOT

let age = 40;
let residence = 'SouthPoint';

let eligible = (age >= 40 || residence == 'Downtown');
console.log(eligible); //true


eligible = (age >= 50 || residence == 'Downtown');
console.log(eligible); //false

eligible = (age >= 40 && residence == 'Downtown');
console.log(eligible); //false

eligible = (age >= 40 && residence == 'SouthPoint');
console.log(eligible); //true

let isNumber = true;
isNumber = !isNumber;
console.log(isNumber); // false

// \n - newline, \t - tab, ' , " ", use \ to get "", \ in output

console.log("Hi \"Everyone\", \n How are you doing? \t Welcome to \\Monday Class!")