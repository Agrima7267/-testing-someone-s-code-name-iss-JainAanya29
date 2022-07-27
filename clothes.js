var points_display =  localStorage.getItem("total points") ;
document.getElementById("value3").innerHTML = points_display ; 

function buy(){
    var existingvalue =  localStorage.getItem("total points") ;
    existingvalue= existingvalue-300
   
    localStorage.setItem("total points", existingvalue);
}
function transfer(){
window.location="mall.html" ;
}