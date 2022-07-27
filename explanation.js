user_name = localStorage.getItem("user_name")
document.getElementById("welcome").innerHTML= "Welcome " + user_name + "!" ;

function transfer(){
    window.location = "clickergame.html" ; 
}