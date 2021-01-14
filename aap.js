var userInput = document.querySelector("#input");
var userInput2 = document.querySelector("#input2");

var outputDiv = document.querySelector("#output");
var btn = document.querySelector("#button");
 var maxDate = 31;
 var maxMonth = 12;
function checkPrime(input){
    var isPrime = true;
var number =parseInt(input);
 if(number >1){
        for(var i=2; i<number;i++){
            if(number % i ==0){
                isPrime = false;
                break;
            }
        }
        if(isPrime){
           outputDiv.innerHTML= number+" is a prime number"
        } 
        else{
            outputDiv.innerHTML = number+" is not a prime number"
        }
    }
    

}

function clickEventHandler(){
    var date = userInput.value;
    var month = userInput2.value;
    var input = date + month;
   if(input == ""){
       outputDiv.innerHTML = "please enter your birth date and month";
   } else if(isNaN(date) || isNaN(month)){
       outputDiv.innerHTML = "Please enter number only ";
   } else if(input == 1){
       outputDiv.innerHTML =" its niether prime nor composite number";
   } else if(date>maxDate || month>maxMonth){
       outputDiv.innerHTML =`date should not exceed ${maxDate} month should not exceed ${maxMonth}`;
   } else{
    checkPrime(input)
   }
}

btn.addEventListener("click",clickEventHandler)

