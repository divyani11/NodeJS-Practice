var count = 8;

// while loop
while(count<8){
    console.log("Inside loop");
}

//do-while loop
do{
    console.log("Inside do-while loop");

}while(count<8);

//for loop
for(i=1; i<count; i++){
    console.log("Inside For Loop");
}

for(let i = 1; i<= 10; i++){
    console.log(i);
}

for (let j=10; j>=1; j--){
    console.log(j);
}

//break keyword - out of the loop
for (let j=10; j>=1; j--){
    //break;
    console.log(j);
    break;
}

for (let j=10; j>=1; j--){
    
    console.log(j);
    
    if(j===5){
    break;
    }
}

while(count>5){
    for(let i=10;i>0;i--){
        console.log("i = "+i);
        if(i===8){
            break;
        }
    }
    count --;
}
