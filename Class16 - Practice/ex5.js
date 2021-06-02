//setInterval

const { workerData } = require("worker_threads");

let greet = function(){
    window.alert("Hi User");

}

window.onload = function(){


setInterval(greet,5000);
}