var button = document.getElementById("burgerButton");

button.onclick = function () {
  var div = document.getElementById("burgerMenu"); 
  if (div.style.display !== "none") {
    div.style.display = "none";
  } else {
    div.style.display = "flex";
  }
};
