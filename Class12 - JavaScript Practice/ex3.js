var number = process.argv[2];

if(number >= 65){
    console.log('Senior Citizen');
}

else if (number>= 18 && number <65){
    console.log('Adult');
}

else if (number<18){
    console.log('Minor');
}

else if(number==null){
    console.log("input the age and run again");
}


//Ternary Operator

var total = 20;
var message = (total === 20)? 'Pass':'Fail';

console.log(message);