 var score = localStorage.getItem("myValue");
document.getElementById("score2").innerHTML=score;

var uchoice;
var need=score;
var cscore=0;
var cchoice;
    if (cscore<=score) {
    
    
function ball1(){

    uchoice=1;
    cchoice = Math.floor(Math.random() * 6) + 1;
if (cchoice!=uchoice) {
    need= need-cchoice;
    document.getElementById("score2").innerHTML=need; 
    document.getElementById("cchoice").innerHTML=cchoice;
    cscore=cscore+cchoice;
    if (cscore>score) {
        console.log("lost");
        window.location.replace("mlost.html");
    }
}
if (cchoice==uchoice) {
    if (score==cscore) {
        window.location.replace("mdraw.html");
    }
    else{
        window.location.replace("mwin.html");
    }
    
}

}function ball2(){
    uchoice=2;
    cchoice = Math.floor(Math.random() * 6) + 1;
if (cchoice!=uchoice) {
    need= need-cchoice;
    document.getElementById("score2").innerHTML=need; 
    document.getElementById("cchoice").innerHTML=cchoice;
    cscore=cscore+cchoice;
    if (cscore>score) {
        console.log("lost");
        window.location.replace("mlost.html");
    }
}
if (cchoice==uchoice) {
    if (score==cscore) {
        window.location.replace("mdraw.html");
    }
    else{
        window.location.replace("mwin.html");
    }
    
}
}function ball3(){
    uchoice=3;
    cchoice = Math.floor(Math.random() * 6) + 1;
if (cchoice!=uchoice) {
    need= need-cchoice;
    document.getElementById("score2").innerHTML=need; 
    document.getElementById("cchoice").innerHTML=cchoice;
    cscore=cscore+cchoice;
    if (cscore>score) {
        console.log("lost");
        window.location.replace("mlost.html");
    }
}
if (cchoice==uchoice) {
    if (score==cscore) {
        window.location.replace("mdraw.html");
    }
    else{
        window.location.replace("mwin.html");
    }
    
}
}function ball4(){
    uchoice=4;
    cchoice = Math.floor(Math.random() * 6) + 1;
if (cchoice!=uchoice) {
    need= need-cchoice;
    document.getElementById("score2").innerHTML=need; 
    document.getElementById("cchoice").innerHTML=cchoice;
    cscore=cscore+cchoice;
    if (cscore>score) {
        console.log("lost");
        window.location.replace("mlost.html");
    }
}
if (cchoice==uchoice) {
    if (score==cscore) {
        window.location.replace("mdraw.html");
    }
    else{
        window.location.replace("mwin.html");
    }
    
}
}function ball5(){
    uchoice=5;
    cchoice = Math.floor(Math.random() * 6) + 1;
if (cchoice!=uchoice) {
    need= need-cchoice;
    document.getElementById("score2").innerHTML=need; 
    document.getElementById("cchoice").innerHTML=cchoice;
    cscore=cscore+cchoice;
    if (cscore>score) {
        console.log("lost");
        window.location.replace("mlost.html");
    }
}
if (cchoice==uchoice) {
    if (score==cscore) {
        window.location.replace("mdraw.html");
    }
    else{
        window.location.replace("mwin.html");
    }
    
}
}function ball6(){
    uchoice=6;
    cchoice = Math.floor(Math.random() * 6) + 1;
if (cchoice!=uchoice) {
    need= need-cchoice;
    document.getElementById("score2").innerHTML=need; 
    document.getElementById("cchoice").innerHTML=cchoice;
    cscore=cscore+cchoice;
    if (cscore>score) {
        console.log("lost");
        window.location.replace("mlost.html");
    }
}
if (cchoice==uchoice) {
    if (score==cscore) {
        window.location.replace("mdraw.html");
    }
    else{
        window.location.replace("mwin.html");
    }
    
}
}
    }else if (score<cscore) {
        console.log("lost");
        window.location.replace("mlost.html");
    }