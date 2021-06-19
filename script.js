        function checkdata(){
            var amount = document.getElementById("principal");
            var interest = document.getElementById("rate");
            var duration = document.getElementById("years");         
            var simple=(amount.value*interest.value*duration.value)/100;
            var futyear=+duration.value + +2021;
        
        
        if((amount.value=="0")||(amount.value<"0")){
                alert("Please enter a Positive integer");
                amount.focus();
                return false;
        }   
        else if((amount.value&&interest.value&&duration.value)!=""){
                alert("If you deposit "+amount.value+" Rs, at an interest rate of "+interest.value+"%, You will receive a simple interest of "+simple+" Rs in the year "+ futyear );
                amount.focus();
                return true;
            }
            
        
            
    }
    
    