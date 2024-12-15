function loadDemo(){

    
}



    function chatBot(){


        var chatBot = document.getElementById("chatBot");

        //chatBot.style.color = "green";
        chatBot.style.marginLeft = "40px";
        chatBot.style.marginTop = "-40px";
        
        chatBot.style.transition = "1s";

        setTimeout(()=>{
           // chatBot.style.marginRight = "5px";
            chatBot = document.location = "First.html";
          
        }, 330)

        }
       
    


    function dropdown(){

        var dropdown = document.getElementById("icons");
      //  var dropdownbtn = document.getElementById("navbar");

        var one = document.getElementById("line1");
        var two = document.getElementById("line2");
        var three = document.getElementById("line3");
        
        if(dropdown.style.display==="block"){

            dropdown.style.display = "none";
          
            one.style.transform = "rotate(-360deg)";
            one.style.marginTop = "10px"; 
            two.style.marginTop = "5px"; 
            one.style.marginTop = " "; 
            two.style.transform = "rotate(360deg)"; 
            two.style.transition = "0.5s"; 
            one.style.transition = "0.5s";     
          
        }

        else{

            dropdown.style.display = "block";
            one.style.transform = "rotate(-40deg)";
            one.style.marginTop = "12px"; 
            two.style.marginTop = "-5px"; 
            two.style.transform = "rotate(40deg)"; 
            two.style.transition = "0.5s"; 
            one.style.transition = "0.5s"; 
        }
    }

    
function display1(){
 
    var question = document.getElementById("fig8qsttext");
    var Btn = document.getElementById("fig8btn1");


    if(question.style.display==="block"){

        question.style.display="none";
        Btn.style.backgroundColor = "rgba(84, 84, 238, 0.397)"; 
        var divEmoji = document.getElementById("qstdivemoji");

        divEmoji.style.transform = "rotate(-90deg)";
       
       // Btnclose2();
       // Btnclose3();
       // Btnclose4();
       // Btnclose5();  
    }

    else{

        question.style.display="block";
        Btn.style.backgroundColor = "royalblue";
         
        var divEmoji = document.getElementById("qstdivemoji");

        divEmoji.style.transform = "rotate(90deg)";
    }
  
    
// Btn.addEventListener("dblclick", Btnclose);

}




//SECOND FAQ

function display2(){
 
    var question2 = document.getElementById("fig8qsttext2");
    var Btn2 = document.getElementById("fig8btn2");

    if(question2.style.display==="block"){

        question2.style.display="none";
        Btn2.style.backgroundColor = "rgba(84, 84, 238, 0.397)";
        var divEmoji = document.getElementById("qstdivemoji2");

        divEmoji.style.transform = "rotate(-90deg)"; 
       
       // Btnclose2();
       // Btnclose3();
       // Btnclose4();
       // Btnclose5();  
    }

    else{

        question2.style.display="block";
        Btn2.style.backgroundColor = "royalblue";
        var divEmoji = document.getElementById("qstdivemoji2");

        divEmoji.style.transform = "rotate(90deg)";
         
    }
}


//THIRD FAQ
function display3(){
 
    var question3 = document.getElementById("fig8qsttext3");
    var Btn3 = document.getElementById("fig8btn3");

    if(question3.style.display==="block"){

        question3.style.display="none";
        Btn3.style.backgroundColor = "rgba(84, 84, 238, 0.397)";
        var divEmoji = document.getElementById("qstdivemoji3");

        divEmoji.style.transform = "rotate(-90deg)";  
       
       // Btnclose2();
       // Btnclose3();
       // Btnclose4();
       // Btnclose5();  
    }

    else{

        question3.style.display="block";
        Btn3.style.backgroundColor = "royalblue";
        var divEmoji = document.getElementById("qstdivemoji3");

        divEmoji.style.transform = "rotate(90deg)"; 
         
    }
}



//FOURTH FAQ
function display4(){
 
    var question4 = document.getElementById("fig8qsttext4");
    var Btn4 = document.getElementById("fig8btn4");

    if(question4.style.display==="block"){

        question4.style.display="none";
        Btn4.style.backgroundColor = "rgba(84, 84, 238, 0.397)";
        var divEmoji = document.getElementById("qstdivemoji4");

        divEmoji.style.transform = "rotate(-90deg)";  
       
       // Btnclose2();
       // Btnclose3();
       // Btnclose4();
       // Btnclose5();  
    }

    else{

        question4.style.display="block"; 
        Btn4.style.backgroundColor = "royalblue";
        var divEmoji = document.getElementById("qstdivemoji4");

        divEmoji.style.transform = "rotate(90deg)"; 
        
    }
}



//FIFTH FAQ
function display5(){
 
    var question5 = document.getElementById("fig8qsttext5");
    var Btn5 = document.getElementById("fig8btn5");

    if(question5.style.display==="block"){
        Btn5.style.backgroundColor = "rgba(84, 84, 238, 0.397)"; 
        question5.style.display="none";
        var divEmoji = document.getElementById("qstdivemoji5");

        divEmoji.style.transform = "rotate(-90deg)"; 
       
       // Btnclose2();
       // Btnclose3();
       // Btnclose4();
       // Btnclose5();  
    }

    else{

        question5.style.display="block"; 
        Btn5.style.backgroundColor = "royalblue";
        var divEmoji = document.getElementById("qstdivemoji5");

        divEmoji.style.transform = "rotate(90deg)"; 
       
       
    }
}


  // WORKING PROGRESS

 function btn1(){

            var Tstwrap = document.getElementById("tstwrap");
            var Tst1 = document.getElementById("tst1");
            var Tst2 = document.getElementById("tst2");
            var Tst3 = document.getElementById("tst3");
            var Tst4 = document.getElementById("tst4");

            var tstbtn1 = document.getElementById("tstbtn");

           
            Tst1.style.visibility = "visible";
            Tst2.style.visibility = "hidden";
            Tst3.style.visibility = "hidden";
            Tst4.style.visibility = "hidden";
           
           
           
            tstbtn1.style.backgroundColor = "lightblue";
            tstbtn1.style.width = "90px";
            tstbtn1.style.opacity = "1";
            tstbtn1.style.transition = "0.5s";

            tstbtn2.style.backgroundColor = " ";
            tstbtn2.style.width = "80px";
            tstbtn2.style.opacity = "0.5";
            tstbtn2.style.transition = "0.5s";
            
            tstbtn3.style.backgroundColor = " ";
            tstbtn3.style.width = "80px";
            tstbtn3.style.opacity = "0.5";
            tstbtn3.style.transition = "0.5s";

            tstbtn4.style.backgroundColor = " ";
            tstbtn4.style.width = "80px";
            tstbtn4.style.opacity = "0.5";
            tstbtn4.style.transition = "0.5s";


            
 }
 function btn2(){

            var Tstwrap = document.getElementById("tstwrap");
            var Tst1 = document.getElementById("tst1");
            var Tst2 = document.getElementById("tst2");
            var Tst3 = document.getElementById("tst3");
            var Tst4 = document.getElementById("tst4");

            var tstbtn1 = document.getElementById("tstbtn");

           
            Tst1.style.visibility = "hidden";
            Tst2.style.visibility = "visible";
            Tst3.style.visibility = "hidden";
            Tst4.style.visibility = "hidden";
           
           
           
            tstbtn2.style.backgroundColor = "lightblue";
            tstbtn2.style.width = "90px";
            tstbtn2.style.opacity = "1";
            tstbtn2.style.transition = "0.5s";

            tstbtn1.style.backgroundColor = " ";
            tstbtn1.style.width = "80px";
            tstbtn1.style.opacity = "0.5";
            tstbtn1.style.transition = "0.5s";

            tstbtn3.style.backgroundColor = " ";
            tstbtn3.style.width = "80px";
            tstbtn3.style.opacity = "0.5";
            tstbtn3.style.transition = "0.5s";

            tstbtn4.style.backgroundColor = " ";
            tstbtn4.style.width = "80px";
            tstbtn4.style.opacity = "0.5";
            tstbtn4.style.transition = "0.5s";

            
 }
 function btn3(){

            var Tstwrap = document.getElementById("tstwrap");
            var Tst1 = document.getElementById("tst1");
            var Tst2 = document.getElementById("tst2");
            var Tst3 = document.getElementById("tst3");
            var Tst4 = document.getElementById("tst4");

            var tstbtn1 = document.getElementById("tstbtn");

           
            Tst1.style.visibility = "hidden";
            Tst2.style.visibility = "hidden";
            Tst3.style.visibility = "visible";
            Tst4.style.visibility = "hidden";
           
           
           
            tstbtn3.style.backgroundColor = "lightblue";
            tstbtn3.style.width = "90px";
            tstbtn3.style.opacity = "1";
            tstbtn3.style.transition = "0.5s";

            tstbtn1.style.backgroundColor = " ";
            tstbtn1.style.width = "80px";
            tstbtn1.style.opacity = "0.5";
            tstbtn1.style.transition = "0.5s";

            tstbtn2.style.backgroundColor = " ";
            tstbtn2.style.width = "80px";
            tstbtn2.style.opacity = "0.5";
            tstbtn2.style.transition = "0.5s";

            tstbtn4.style.backgroundColor = " ";
            tstbtn4.style.width = "80px";
            tstbtn4.style.opacity = "0.5";
            tstbtn4.style.transition = "0.5s";


            
 }
 function btn4(){

            var Tstwrap = document.getElementById("tstwrap");
            var Tst1 = document.getElementById("tst1");
            var Tst2 = document.getElementById("tst2");
            var Tst3 = document.getElementById("tst3");
            var Tst4 = document.getElementById("tst4");

            var tstbtn1 = document.getElementById("tstbtn");

           
            Tst1.style.visibility = "hidden";
            Tst2.style.visibility = "hidden";
            Tst3.style.visibility = "hidden";
            Tst4.style.visibility = "visible";
           
           
           
            tstbtn4.style.backgroundColor = "lightblue";
            tstbtn4.style.width = "90px";
            tstbtn4.style.opacity = "1";
            tstbtn4.style.transition = "0.5s";

            tstbtn1.style.backgroundColor = " ";
            tstbtn1.style.width = "80px";
            tstbtn1.style.opacity = "0.5";
            tstbtn1.style.transition = "0.5s";

            tstbtn2.style.backgroundColor = " ";
            tstbtn2.style.width = "80px";
            tstbtn2.style.opacity = "0.5";
            tstbtn2.style.transition = "0.5s";

            tstbtn3.style.backgroundColor = " ";
            tstbtn3.style.width = "80px";
            tstbtn3.style.opacity = "0.5";
            tstbtn3.style.transition = "0.5s";


            
            
 }

 setInterval(() =>{

    btn1();

 }, 4000);

 setInterval(() =>{

    btn2();

 }, 8000);

 setInterval(() =>{

    btn3();

 }, 12000);

 setInterval(() =>{

    btn4();

 }, 16000);


 function SignUp(){

    document.location="signed in.html";
 }

 function LDeposit(){

        var Table = document.getElementById("transactionTabContent");
        var Table2 = document.getElementById("withdrawWrap");
          
        var TabBtn1 = document.getElementById("TransBtn1");
        var TabBtn2 = document.getElementById("TransBtn2");
        Table.style.visibility = "visible";
        Table.style.position = "";

        Table2.style.visibility = "hidden";
        Table.style.position = "";
        TabBtn2.style.backgroundColor = "transparent";
        TabBtn1.style.backgroundColor = "blue";
        TabBtn1.style.transition = "0.5s";



    
 }


 function LWithdraw(){

    var Table = document.getElementById("transactionTabContent");
    var Table2 = document.getElementById("withdrawWrap");
          
    var TabBtn1 = document.getElementById("TransBtn1");
    var TabBtn2 = document.getElementById("TransBtn2");
    Table.style.visibility = "hidden";
    Table.style.position = "";
    Table2.style.visibility = "visible";
    Table.style.position = "";
    TabBtn1.style.backgroundColor = "transparent";
    TabBtn2.style.backgroundColor = "blue";
    TabBtn2.style.transition = "0.5s";



 }

function Increment(){

            var Pst = document.getElementById("investPst1");
           // var Invest1 = document.getElementById("invest1");

           
}

function MoreInfo(){
    
    document.location="signed in.html";

}