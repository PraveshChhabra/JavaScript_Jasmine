/*
It is a Glue B/w View (HTML) and Model (Logic)
*/
window.addEventListener("DOMContentLoaded",function(){   
    document.getElementById("btAdd").addEventListener("click",function(){
       document.getElementById("answer").className="add";        document.getElementById("answer").innerHTML=Sum(document.getElementById("txtfirstnumber").value,document.getElementById("txtsecondnumber").value);
    })
      
    document.getElementById("btMinus").addEventListener("click",function(){
       document.getElementById("answer").className="minus";        document.getElementById("answer").innerHTML=Minus(document.getElementById("txtfirstnumber").value,document.getElementById("txtsecondnumber").value);
    })
       
    document.getElementById("btMultiply").addEventListener("click",function(){
       document.getElementById("answer").className="multiply";        document.getElementById("answer").innerHTML=Multiple(document.getElementById("txtfirstnumber").value,document.getElementById("txtsecondnumber").value);
    })
    
    document.getElementById("btDivide").addEventListener("click",function(){
       document.getElementById("answer").className="divide";        document.getElementById("answer").innerHTML=Divide(document.getElementById("txtfirstnumber").value,document.getElementById("txtsecondnumber").value);
    })
    
    document.getElementById("btreset").addEventListener("click",function(){          
       document.getElementById("answer").innerHTML="";
       document.getElementById("txtfirstnumber").value="";
       document.getElementById("txtsecondnumber").value="";
    })
});

//window.addEventListener("load",function(){
//alert("LOad Call....")
//});





//window.addEventListener("DOMContentLoaded",init);
//function init(){
//document.getElementById("greetBt").addEventListener("click",sayWelcome); 
//}
//function sayWelcome(){
//            var firstName = document.getElementById("firstname").value;
//            var lastName = document.getElementById("lastname").value;
//            var message = "Welcome "+firstName+ "  "+lastName;
//            document.getElementById("msg").innerHTML=message;
//        }