var catcoins = 0;

document.getElementById("clickMe").addEventListener("click",function() {
  catcoinClick(1);
});

function catcoinClick(a){
  catcoins += a;
  document.getElementById("catcoins").innerHTML = catcoins;
}
 var catfood = 0;
 
 function buyCatfood(){
   var catfoodCost = Math.floor(10 * Math.pow(1.1,catfood));
   if(catcoins >= catfoodCost){
     catfood = catfood + 1;
     catcoins = catcoins - catfoodCost;
document.getElementById("catfoodCost").innerHTML = catfood;
   }
   var Catfood = Math.floor(10 * Math.pow(1.1,catfood));
   document.getElementById("catfoodCost").innerHTML = "catfoodCost";
 }

window.setInterval(function(){
  catcoinClick(a);
  
}, 1000);
