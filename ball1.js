var tot = 0;
var uchoice = 0;
var s = 0;
var resetValue =0;
localStorage.setItem("myValue", resetValue);s;
var out= 0;
var s = uchoice;
var tot = 0;
var cchoice = 0;
var oppout = 0;
var oppscore = 0;


	

	function ball1() {
		
		
		
		uchoice = 1;
					cchoice = Math.floor(Math.random() * 6) + 1;
					
					if (cchoice == 1) {
						window.location.replace("bat1.html");
						
					} else {
						oppscore=cchoice+ oppscore ;
						localStorage.setItem("myValue", oppscore);
						document.getElementById("oppscore").innerHTML = oppscore;
                        document.getElementById("cchoice").innerHTML = cchoice;
                        document.getElementById("uchoice").innerHTML = uchoice;
				
					}
				}
			
					
			
					
					function ball2() {

					uchoice = 2;
					
					cchoice = Math.floor(Math.random() * 6) + 1;
					
                    if (cchoice == 2) {
						window.location.replace("bat1.html");
						
					} else {
						oppscore=cchoice+ oppscore ;
						localStorage.setItem("myValue", oppscore);
						document.getElementById("oppscore").innerHTML = oppscore;
                        document.getElementById("cchoice").innerHTML = cchoice;
                        document.getElementById("uchoice").innerHTML = uchoice;
				
					}
					}
					
						

					function ball3() {
					uchoice = 3;
					
					console.log("button 1 ");
					cchoice = Math.floor(Math.random() * 6) + 1;
					
					if (cchoice == 3) {
						window.location.replace("bat1.html");
						
					} else {
						oppscore=cchoice+ oppscore ;
						localStorage.setItem("myValue", oppscore);
						document.getElementById("oppscore").innerHTML = oppscore;
                        document.getElementById("cchoice").innerHTML = cchoice;
                        document.getElementById("uchoice").innerHTML = uchoice;
				
					}
					}
				

					function ball4() {
					uchoice = 4;
					
					console.log("button 1 ");
					cchoice = Math.floor(Math.random() * 6) + 1;
					if (cchoice == 4) {
						window.location.replace("bat1.html");
						
					} else {
						oppscore=cchoice+ oppscore ;
						localStorage.setItem("myValue", oppscore);
						document.getElementById("oppscore").innerHTML = oppscore;
                        document.getElementById("cchoice").innerHTML = cchoice;
                        document.getElementById("uchoice").innerHTML = uchoice;
				
					}
					}
				
						

					function ball5() {
					uchoice = 5;
				
					console.log("button 1 ");
					cchoice = Math.floor(Math.random() * 6) + 1;
					
                    if (cchoice == 5) {
						window.location.replace("bat1.html");
						
					} else {
						oppscore=cchoice+ oppscore ;
						localStorage.setItem("myValue", oppscore);
						document.getElementById("oppscore").innerHTML = oppscore;
                        document.getElementById("cchoice").innerHTML = cchoice;
                        document.getElementById("uchoice").innerHTML = uchoice;
				
					}
					}
				
						

					function ball6() {
					uchoice = 6;
				
					console.log("button 1 ");
					cchoice = Math.floor(Math.random() * 6) + 1;
					
					if (cchoice == 6) {
						window.location.replace("bat1.html");
						
					} else {
						oppscore=cchoice+ oppscore ;
						localStorage.setItem("myValue", oppscore);
						document.getElementById("oppscore").innerHTML = oppscore;
                        document.getElementById("cchoice").innerHTML = cchoice;
                        document.getElementById("uchoice").innerHTML = uchoice;
				
					}
						
}
