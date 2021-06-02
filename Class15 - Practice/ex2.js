//Function within Function

function print(){
    console.log("Hello");
    function greet(){
        console.log("World");
    }
    greet();
}
//greet(); //will throw error bcoz greet() is not defined outside the function
print();