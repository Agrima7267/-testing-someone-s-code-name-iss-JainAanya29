var point=0 
function increasepoint(){
  point = point+1
  document.getElementById("heading2").innerHTML= point; 
}
function change_object(){
   document.getElementById("apple").src="diomand.png"
}
function change_object2(){
  document.getElementById("apple").src="apple.jpg"
}
function next(){
  var total_points = document.getElementById("heading2").innerHTML ;
  localStorage.setItem("total points", total_points);
window.location= "mall.html";
}