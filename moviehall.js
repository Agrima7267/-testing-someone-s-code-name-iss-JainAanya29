var points_display =  localStorage.getItem("total points") ;
document.getElementById("value").innerHTML = points_display ; 

function buy1(){
    var existingvalue =  localStorage.getItem("total points") ;
    existingvalue= existingvalue-40
   
    localStorage.setItem("total points", existingvalue);
}

function on(){
    document.getElementById("movie_hall").src="theatre 2.jpg"
}
function back(){
    window.location = "mall.html";
}
