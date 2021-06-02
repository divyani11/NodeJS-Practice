//Objects

var person = {
    myName :'Divya',
    age: 30,
    greet : function(){
        console.log("Welcome, " + this.myName);

    }

};
console.log(person);
console.log(person.myName);
console.log(person.age);
person.city ='Saskatoon';
console.log(person.city);

person.greet();

function print(yourName){
    console.log("Hello! " + yourName);

}
print(person.myName);

// to print all properties of an Object
var properties = Object.keys(person);
console.log(properties);   //myName

console.log(person[properties[0]]);  //Divya