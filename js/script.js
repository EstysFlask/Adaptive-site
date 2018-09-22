menu.onclick = function menuClick() {
  var myNav = document.getElementById("myNav");

  if(myNav.className == "topnav") {
    myNav.className += " responsive";
  } else {
    myNav.className = "topnav";
  }
}


function snack() {
  var bar = document.getElementById("snackbar");
  bar.className = "show";
  setTimeout(function(){
    bar.classList.remove("show");
  }, 3000);
}
