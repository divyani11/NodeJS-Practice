//timers
//setTimeout

const { timeout } = require("async");

//const { timeout } = require("async");

const greet = function(){
    window.alert("Hi user");

}

setTimeout(greet,5000);

setTimeout(function(){
    window.confirm("Would you like to participate in survey");},10000);


