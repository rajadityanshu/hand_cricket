var tot = 0;
var uchoice = 0;
var s = 0;
var resetValue =0;
localStorage.setItem("myValue", resetValue);
document.getElementById("score").innerHTML = uchoice;
document.getElementById("computerchoiceshow").innerHTML = uchoice;
document.getElementById("score2").innerHTML=s;
//function score(){
var out= 0;
var s = uchoice;
var tot = 0;
var h = "Half Century";
var c = "Century";
var cchoice = 0;
// document.getElementById('score').innerHTML = tot;
// if(tot >= 50 && tot <= 55){
// 	document.getElementById('achievement').innerHTML = h;
// }
// else if(tot >= 100 && tot <= 105){
// 	document.getElementById('achievement').innerHTML = c;
// }
// else{
// 	document.getElementById('achievement').innerHTML = "";
// }
//}
var oppout = 0;
function ball() {
	
	alert("out");
	
	}

	

	function play1() {
		
		
		
		uchoice = 1;
	
					console.log("button 1 ");
					cchoice = Math.floor(Math.random() * 6) + 1;
					
					if (cchoice == 1) {
						console.log("out");
						oppout = 1;
						window.location.replace("ball.html");
						
					} else {
						s = s + uchoice;
						localStorage.setItem("myValue", s);
						console.log("single..");
						document.getElementById("score").innerHTML = s;
					document.getElementById("computerchoiceshow").innerHTML = cchoice;
				
					}
				}
			
					
			
					
					function play2() {

					uchoice = 2;
					
					console.log("button 1 ");
					cchoice = Math.floor(Math.random() * 6) + 1;
					
					if (cchoice == 2) {
						console.log("out");
						window.location.replace("ball.html");
						
					} else {
						s = s + uchoice;
						localStorage.setItem("myValue", s);
						console.log("single..");
						document.getElementById("score").innerHTML = s;
					document.getElementById("computerchoiceshow").innerHTML = cchoice;
				
					}
					}
					
						

					function play3() {
					uchoice = 3;
					
					console.log("button 1 ");
					cchoice = Math.floor(Math.random() * 6) + 1;
					
					if (cchoice == 3) {
						console.log("out");
						window.location.replace("ball.html");
						
					} else {
						s = s + uchoice;
						localStorage.setItem("myValue", s);
						console.log("single..");
						document.getElementById("score").innerHTML = s;
					document.getElementById("computerchoiceshow").innerHTML = cchoice;
				
					}
					}
				

					function play4() {
					uchoice = 4;
					
					console.log("button 1 ");
					cchoice = Math.floor(Math.random() * 6) + 1;
				
					if (cchoice == 4) {
						console.log("out");
						window.location.replace("ball.html");
						
					
					} else {
						s = s + uchoice;
						localStorage.setItem("myValue", s);
						console.log("single..");
						document.getElementById("score").innerHTML = s;
						document.getElementById("computerchoiceshow").innerHTML = cchoice;
				
					}
					}
				
						

					function play5() {
					uchoice = 5;
				
					console.log("button 1 ");
					cchoice = Math.floor(Math.random() * 6) + 1;
					
					if (cchoice == 5) {
						console.log("out");
						window.location.replace("ball.html");
						
						
					} else {
						s = s + uchoice;
						localStorage.setItem("myValue", s);
						console.log("single..");
						document.getElementById("score").innerHTML = s;
						document.getElementById("computerchoiceshow").innerHTML = cchoice;
					}
					}
				
						

					function play6() {
					uchoice = 6;
				
					console.log("button 1 ");
					cchoice = Math.floor(Math.random() * 6) + 1;
					
					if (cchoice == 6) {
						console.log("out");
						window.location.replace("ball.html");
						
							
           
					} else {
						s = s + uchoice;
						localStorage.setItem("myValue", s);
						console.log("single..");
						document.getElementById("score").innerHTML = s;
						document.getElementById("computerchoiceshow").innerHTML = cchoice;
					
					}
						
}
