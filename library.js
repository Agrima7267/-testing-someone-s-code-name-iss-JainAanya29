var points_display =  localStorage.getItem("total points") ;
document.getElementById("value").innerHTML = points_display ; 

function buy(){
    var changevalue =  localStorage.getItem("total points") ;
 changevalue= changevalue-30
   
    localStorage.setItem("total points", changevalue);
}

function mall(){
window.location="mall.html";
}