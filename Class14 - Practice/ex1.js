//foreach loop

var pets = ['Marlo','Penny','Peanut'];
pets.forEach(function(pet,index){
    //console.log(pet);
    pets[index] = pet.toUpperCase();
}
);

console.log(pets);
let words = ['One','Two','Three'];
words.forEach(function(word)
{
    console.log(word);
    if(word === 'Two'){
        words.shift();
    }
}
);

//other way of defining foreach loop by not using function
words.forEach(word => console.log(word));

