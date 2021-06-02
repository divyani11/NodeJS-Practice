// Filter method on Arrays

var grades = [1,2,3,4,6,7,8,17,10];
var firstClass = grades.filter(function(grade){
    return grade >=6;

});
console.log(firstClass);