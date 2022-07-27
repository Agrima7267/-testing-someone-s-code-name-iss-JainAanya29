function transfer(){
    var user_name = document.getElementById("enter_name").value ;
    localStorage.setItem("user_name", user_name)
    window.location = "explanation.html"
}