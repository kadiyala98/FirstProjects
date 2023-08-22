function goToMensPage() {
  window.location.href = "./shopingmens/mens.html";
  console.log(1);
}

function goToWomensPage() {
  window.location.href = "/shopingwomen/shoppingwomen.html";
  console.log(1);
}

function goToKidsPage() {
  window.location.href = "/shoppingkids/shoppingkids.html";
}
function goToAboutsPage() {
  window.location.href = "./aboutus.html";
}
function goToSignupPage() {
  window.location.href = "./signup.html";
}
function goToLoginPage() {
  window.location.href = "./login.html";
}

document.addEventListener("DOMContentLoaded", function() {
  var mens = document.getElementById("clickableheading1");
  // console.log(mens);
  var womens = document.getElementById("clickableheading2");
  var kids = document.getElementById("clickableheading3");
  var aboutus =document.getElementById("clickableheading4");
  var signup =document.getElementById("clickableheading5");
  var login =document.getElementById("clickableheading6");
  
  login.addEventListener("click", goToLoginPage);
  signup.addEventListener("click", goToSignupPage);
  mens.addEventListener("click", goToMensPage);
  womens.addEventListener("click", goToWomensPage);
  kids.addEventListener("click", goToKidsPage);
  aboutus.addEventListener("click",goToAboutsPage);
});
