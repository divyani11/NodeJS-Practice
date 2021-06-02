// Arguments

function addition(){

    console.log(arguments); //it will print all arguments
    console.log("Argument Length: " +arguments.length); // it will give no. of arguments
   // console.log(arguments[0] + arguments[1]);

    
    let total =0;
    for(let i=0;i<arguments.length;i++)
    {
        total += arguments[i];
    }
    console.log("Total:" +total);

}

addition(3,5);
addition(4,6,5,4,2,1,3);

// Recursion

