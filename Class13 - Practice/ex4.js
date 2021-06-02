function addition(a,b){
    let numTotal = a+b;
    console.log("numTotal: "+numTotal);
    return numTotal;
}

let num1 =5, num2 =9;
let total=0;

//total = num1 + num2;

total = addition(num1,num2);
console.log(total);