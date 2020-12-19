var countt = document.getElementById("count"); 
var panier= document.getElementById("item_count");
countt.addEventListener("click", incrimenter());
panier.innerHTML=0;
function incrimenter(){
  
  panier.innerHTML= parseInt(panier.innerHTML)+1;
  
}







   
 