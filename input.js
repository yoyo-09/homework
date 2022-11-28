
function kao(){
    const name = document.getElementById("name").value;
    const password = document.getElementById("password").value;
    //admin
    if ( name == "admin" && password == "12345"){
        window.location = "admin.html";
        return true;
    }
    else{
    //user
    if ( name == "user" && password == "12345"){
        window.location = "user.html";
        return true;
    }}
    if(  name == ""  || password == ""){
        alert ("your password is incorrect")
    }}