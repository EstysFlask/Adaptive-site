menu.onclick = function menuClick() {
  var myNav = document.getElementById("myNav");

  if(myNav.className == "topnav") {
    myNav.className += " responsive";
  } else {
    myNav.className = "topnav";
  }
}
