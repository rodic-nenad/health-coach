var niz = [];
var current = 0;
niz.push(document.getElementById("zeroSection"));
niz.push(document.getElementById("zeroSectionOption2"));
/*
function nextAkcija(){
   current = (current < niz.length-1)? current+1 : 0;
   for (var i=0; i< niz.length; i++){
        niz[i].style.display = (current == i)? 'block' : 'none';
   }
}

function prevAkcija(){
  current = (current > 0)? current-1 : niz.length-1;
    for (var i=0; i< niz.length; i++){
        niz[i].style.display = (current == i)? 'block' : 'none';
   }
  
}*/
/*
function nextAkcija(){
  var option1 = {
    "margin-right" = 1000
  }
  var option2 = {
    "margin-left" = -1000
  }
   current = (current < niz.length-1)? current+1 : 0;
   for (var i=0; i< niz.length; i++){
        if(current === i){

      niz[i].animate(width: "toggle", 1000);          

        }else{


          niz[i].animate(width: "toggle", 1000);
        }
   }
}*/

$( document ).ready(function(){

$('#showRight').click(nextAkcija);
$('#showLeft').click(prevAkcija);

function nextAkcija(){
  /*
  if ( $("#zeroSection").css( "margin-left" ) === 0 ){
*/
    $('#zeroSection').animate({"margin-left": "-100%"}, 2000);
    $('#zeroSectionOption2').animate({"margin-left": 0}, 2000);
/*  }  */
}

function prevAkcija(){
  /*
  if ( $("#zeroSection").css( "margin-left" ) === 0 ){
*/
    $('#zeroSection').animate({"margin-left": 0}, 2000);
    $('#zeroSectionOption2').animate({"margin-left": "100%"}, 2000);
/*  }  */
}

});



function markFourthSectionPoing(event){
  var listFourthSec = document.getElementsByClassName("fourthSectionPoint");
  for (var i = 0; i < listFourthSec.length; i++ ){
    if (listFourthSec[i] === event.currentTarget){
      listFourthSec[i].style.opacity = "1"; 
    }else{
      listFourthSec[i].style.opacity = "0.5";
    }   
  }

}

function showFirst(){
  document.getElementById("sixtSectionFirstStory").style.display = "block";
  document.getElementById("sixtSectionSecondStory").style.display = "none";

  document.getElementById("firstCircle").style.color = "#2acd35";
  document.getElementById("secondCircle").style.color = "#CCCCCC";
}
function showSecond(){
  document.getElementById("sixtSectionFirstStory").style.display = "none";
  document.getElementById("sixtSectionSecondStory").style.display = "block";

  document.getElementById("firstCircle").style.color = "#CCCCCC";
  document.getElementById("secondCircle").style.color = "#2acd35";
}