//confirm

let shouldDelete = window.confirm("Are you sure you want to delete the file");

if(shouldDelete){
    console.log("Your file has been successfully delete");
}
else{
    console.log("You can delete your file anytime in the future")
}