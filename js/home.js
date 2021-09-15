

//alert("works");

document.getElementById("mobilemenubtn").addEventListener("click", displaymobilemenu);
document.getElementById("mobilemenu").addEventListener("click", hidemobilemenu);
//document.getElementById("mainnav").addEventListener("click", displaymobilemenu);

function displaymobilemenu () {
    //alert("TT");
  document.getElementById("mobilemenu").style.display = "block";
}

function hidemobilemenu () {
    //alert("TT");
  document.getElementById("mobilemenu").style.display = "none";
}