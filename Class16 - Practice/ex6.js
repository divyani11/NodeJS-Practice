

window.onload = function(){

    setTimeout(() =>{

let mainTitle = document.getElementById("firstTitle");
//alert(mainTitle);

mainTitle.style.color = "red";

console.log(mainTitle);
},5000);

var divElement = document.querySelector('div'); //any html element
console.log(divElement);
console.log(divElement.attributes);
console.log(divElement.getAttribute('class'));
console.log('Div element has ID?' +divElement.hasAttribute('id'));

var hasID = divElement.hasAttribute('id');

if(hasID == false){
    divElement.setAttribute('id','firstDiv');
}

if(!divElement.hasAttribute('id')){
    divElement.setAttribute('id','firstDiv');
}
console.log('Div element has ID? : ' + divElement.hasAttribute('id'));

var allDivElements = document.querySelectorAll('div');
console.log(allDivElements);

}