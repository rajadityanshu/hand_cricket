var cchoice;
var uchoice;
 var oppscore =localStorage.getItem("myValue");	
var a =oppscore;
var uscore = 0;
	function play1() {
		
		
		
		uchoice = 1;
	
					console.log("button 1 ");
					cchoice = Math.floor(Math.random() * 6) + 1;
					if (cchoice==uchoice) {
                        if (oppscore>uscore) {
                            
                        window.location.replace("mlost.html");
                        }
                    else if (oppscore == uscore) {
                        window.location.replace("mdraw");
                    }
                }
                    else if(cchoice!=1){
                        uscore=uscore+uchoice;
                        a=a-uchoice;
                        document.getElementById("uchoice").innerHTML=uchoice;
                        document.getElementById("cchoice").innerHTML=cchoice;
                        document.getElementById("score").innerHTML = a;

                    }
                   if (uscore > oppscore) {
                        console.log("win");
                        window.location.replace("mwin.html");
                    }
				}
			
					
			
					
					function play2() {

					uchoice = 2;
					
					console.log("button 1 ");
					cchoice = Math.floor(Math.random() * 6) + 1;
                    if (cchoice==uchoice) {
                        if (oppscore>uscore) {
                            
                        window.location.replace("mlost.html");
                        }
                    else if (oppscore == uscore) {
                        window.location.replace("mdraw");
                    }
                }
                    else if(cchoice!=1){
                        uscore=uscore+uchoice;
                        a=a-uchoice;
                        document.getElementById("uchoice").innerHTML=uchoice;
                        document.getElementById("cchoice").innerHTML=cchoice;
                        document.getElementById("score").innerHTML = uscore;

                    }
                   if (uscore > oppscore) {
                        console.log("win");
                        window.location.replace("mwin.html");
                    }
					}
					
						

					function play3() {
					uchoice = 3;
					
					console.log("button 1 ");
					cchoice = Math.floor(Math.random() * 6) + 1;
					
                    if (cchoice==uchoice) {
                        if (oppscore>uscore) {
                            
                        window.location.replace("mlost.html");
                        }
                    else if (oppscore == uscore) {
                        window.location.replace("mdraw");
                    }
                }
                    else if(cchoice!=1){
                        uscore=uscore+uchoice;
                        a=a-uchoice;
                        document.getElementById("uchoice").innerHTML=uchoice;
                        document.getElementById("cchoice").innerHTML=cchoice;
                        document.getElementById("score").innerHTML = uscore;

                    }
                   if (uscore > oppscore) {
                        console.log("win");
                        window.location.replace("mwin.html");
                    }
					}
				

					function play4() {
					uchoice = 4;
					
					console.log("button 1 ");
					cchoice = Math.floor(Math.random() * 6) + 1;
                    if (cchoice==uchoice) {
                        if (oppscore>uscore) {
                            
                        window.location.replace("mlost.html");
                        }
                    else if (oppscore == uscore) {
                        window.location.replace("mdraw");
                    }
                }
                    else if(cchoice!=1){
                        uscore=uscore+uchoice;
                        a=a-uchoice;
                        document.getElementById("uchoice").innerHTML=uchoice;
                        document.getElementById("cchoice").innerHTML=cchoice;
                        document.getElementById("score").innerHTML = uscore;

                    }
                   if (uscore > oppscore) {
                        console.log("win");
                        window.location.replace("mwin.html");
                    }
					}
				
						

					function play5() {
					uchoice = 5;
				
					console.log("button 1 ");
					cchoice = Math.floor(Math.random() * 6) + 1;
                    if (cchoice==uchoice) {
                        if (oppscore>uscore) {
                            
                        window.location.replace("mlost.html");
                        }
                    else if (oppscore == uscore) {
                        window.location.replace("mdraw");
                    }
                }
                    else if(cchoice!=1){
                        uscore=uscore+uchoice;
                        a=a-uchoice;
                        document.getElementById("uchoice").innerHTML=uchoice;
                        document.getElementById("cchoice").innerHTML=cchoice;
                        document.getElementById("score").innerHTML = uscore;

                    }
                   if (uscore > oppscore) {
                        console.log("win");
                        window.location.replace("mwin.html");
                    }
					}
				
						

					function play6() {
					uchoice = 6;
				
					console.log("button 1 ");
					cchoice = Math.floor(Math.random() * 6) + 1;
                    if (cchoice==uchoice) {
                        if (oppscore>uscore) {
                            
                        window.location.replace("mlost.html");
                        }
                    else if (oppscore == uscore) {
                        window.location.replace("mdraw");
                    }
                }
                    else if(cchoice!=1){
                        uscore=uscore+uchoice;
                        a=a-uchoice;
                        document.getElementById("uchoice").innerHTML=uchoice;
                        document.getElementById("cchoice").innerHTML=cchoice;
                        document.getElementById("score").innerHTML = uscore;

                    }
                   if (uscore > oppscore) {
                        console.log("win");
                        window.location.replace("mwin.html");
                    }
						
}
