console.log("ghii");

function myFunction() {
x = (Math.floor(Math.random() *2)==0);
if (x) {

  
   window.location.replace("win.html");
  
} else {
    
    window.location.replace("lost.html");
  
}}
function tails() {
    //console.log("tails worked");
    x = (Math.floor(Math.random() *2)==1);
    if (x) {
      
        window.location.replace("win.html");
     } else {
        window.location.replace("lost.html");
         
     }
}






