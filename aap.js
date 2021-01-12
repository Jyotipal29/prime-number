var userInput = document.querySelector("#input");
var outputDiv = document.querySelector("#output");
var btn = document.querySelector("#button");
 var maxDate = 31;
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
    var input  = userInput.value;
    if(input == ""){
        outputDiv.innerHTML = "please enter your birth-date";
    } else if(input == 1){
        outputDiv.innerHTML = "1 is niether prime nor compossite";
    } 
    checkPrime(input)
}

btn.addEventListener("click",clickEventHandler)

