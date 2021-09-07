
function hide1() {
    document.getElementById("s1").style.display = "block";
    document.getElementById("s2").style.display = "none";
    document.getElementById("s3").style.display = "none";
    document.getElementById("btn1").style.color = "#7f1618";
    document.getElementById("btn2").style.color = "#000";
    document.getElementById("btn3").style.color = "#000";
    document.getElementById("li1").style.borderColor = "#7f1618";
    document.getElementById("li2").style.borderColor = "#dddddd";
    document.getElementById("li3").style.borderColor = "#dddddd";
}

function hide2() {
    document.getElementById("s1").style.display = "none";
    document.getElementById("s2").style.display = "block";
    document.getElementById("s3").style.display = "none";
    document.getElementById("btn2").style.color = "#7f1618";
    document.getElementById("li2").style.borderColor = "#7f1618";
    document.getElementById("li1").style.borderColor = "#dddddd";
    document.getElementById("li3").style.borderColor = "#dddddd";
    document.getElementById("btn1").style.color = "##000";
    document.getElementById("btn3").style.color = "#000";
}

function hide3() {
    document.getElementById("btn3").style.color = "#7f1618";
    document.getElementById("s1").style.display = "none";
    document.getElementById("s3").style.display = "block";
    document.getElementById("s2").style.display = "none";
    document.getElementById("li3").style.borderColor = "#7f1618";
    document.getElementById("li1").style.borderColor = "#dddddd";
    document.getElementById("li2").style.borderColor = "#dddddd";
    document.getElementById("btn2").style.color = "#000";
    document.getElementById("btn1").style.color = "#000";
}
    
function first(){
    document.getElementById("btn1").style.color = "#7f1618";
    document.getElementById("li1").style.borderColor = "#7f1618";
 }