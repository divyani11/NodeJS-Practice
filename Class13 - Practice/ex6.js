var names = ['Joel','Michael','Josh'];

names.push('Jason');  //push method to add data

console.log(names.length);  //4

names.unshift("Kate"); //unshift method - shift all values and add in the beginning
console.log(names);

names.shift();  //shift method removes first value of array
console.log(names); 

names.pop();  // pop method removed las value of an array
console.log(names);

console.log(names.indexOf(2));