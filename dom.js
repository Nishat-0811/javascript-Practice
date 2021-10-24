var var1= document.getElementsByTagName("a")[0];
var1.innerHTML="balll";
var1.style.textDecoration = "none";
var1.style.color = "red";
var1.style.fontSize = "1.5rem";
var1.href = "https://www.facebook.com/";

var heading1 = document.getElementsByTagName("h1")[0];
heading1.innerHTML= "mim changed it";
heading1.style.color = "white";

var heading3 = document.createElement("h2");
var text = document.createTextNode("this is heading-3");
heading3.appendChild(text);
document.getElementById("div1");
div1.appendChild(heading3);

var heading2 = document.getElementsByTagName("h1")[1];
div1.removeChild(heading2);

var heading0 = document.createElement("h1");
var text0 = document.createTextNode("this is first heading");
heading0.appendChild(text0);
div1.appendChild(heading0);
var heading1 = document.getElementsByTagName("h1")[0];
div1.insertBefore(heading0,heading1)


  