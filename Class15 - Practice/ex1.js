//Hoisting - define variable at any point

console.log(myName);
var myName = "Divya";
console.log(myName);

//------------------------------

//Scope of variable

//by defaults variables are global

function assignValues()
{
var city = "Saskatoon"; // var is a global variable
let country = "Canada"; 
var person = {
    myName :"Jeff",
    age :30
};
}
console.log(person);

function printCity()
{
    let country = "India";
    console.log(city);
    city = "Houston";
   console.log(country); //Error - let can be used only in that specific scope // It will print INDIA as it is defined iside the function
}

printCity()
console.log(city);