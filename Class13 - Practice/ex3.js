//functions

//function - keyword is used to define function
function addition()
{
    console.log("The operation is addition");
    return 1;
}

const subtraction = function(){
    console.log("The operation is subtraction");
}

var num1 =3, num2 =5;
var total;
total=num1+num2;

console.log(total);
var returnValue = addition();
console.log("Return Value ="+returnValue);

console.log(addition());
subtraction(); //calling the function

