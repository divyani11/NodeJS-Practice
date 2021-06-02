//toUpperCase function

var pets = ['Marlo','Penny','Peanut'];

var petUpperCase = pets.map(function(pet){
    return pet.toUpperCase();
});

console.log(pets);
console.log(petUpperCase);

pets.forEach(function(pet,index) //second parameter is always refered to an index of an array #index - index of pets array
{ 
    pets[index] = pet.toUpperCase();
})

console.log(pets);