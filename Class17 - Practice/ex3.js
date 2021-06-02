//json
//Async programming //fetch

var apiUrl = 'https://api.tvmaze.com/search/shows?q=batman';
fetch(apiUrl)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data);
    });

//fetch(api)
//.then(function(response){

//})