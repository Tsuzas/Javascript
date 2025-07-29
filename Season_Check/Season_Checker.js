// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler
 
// console.log("Welcome to the Season Checker Online.\nYes this was written on a fucking online compiler,\n \tGod Bless America!\n\n")
// let userInput = prompt("Please Choose a month: \n Janeiro\n Fevereiro\n Marco\n Abril\n Maio\n Junho\n Julho\n Agosto\n Setembro\n Outubro\n Novembro\n Dezembro\n");
 
 
function sChecker()
{
    let userInput = document.getElementById("sData").value
    switch (userInput.toLowerCase()){
        case "january":
        case"february":
            document.getElementById("sCheck").innerHTML = "Season is: Winter";
        break;
        case"march":
            userInput = prompt("What day are we talking?\n")
            userInput = +userInput;
            if(userInput > 31){
                document.getElementById("sCheck").innerHTML = "March only goes up to 31 yknow.";
            }
            else if  (userInput> 21 ){
                document.getElementById("sCheck").innerHTML = "Season is: Spring"
            }
            else {
                document.getElementById("sCheck").innerHTML = "Season is: Winter"
            }
        break;
        case"april":
        case"march":
            document.getElementById("sCheck").innerHTML = "Season is: Spring"
        break;
        case"june":
            userInput = prompt("What day are we talking?\n")
            userInput = +userInput;
            if (userInput > 30) {
            document.getElementById("sCheck").innerHTML = "June only goes up to 30..."
            } 
            else if (userInput > 21) {
                document.getElementById("sCheck").innerHTML = "Season is: Summer"
            } 
            else {
                document.getElementById("sCheck").innerHTML = "Season is: Spring"
            }
        break;
        case"july":
        case"august":
            document.getElementById("sCheck").innerHTML = "Season is: Summer"
        break;
        case"september":
            userInput = prompt("What day are we talking?\n")
            userInput = +userInput;
            if(userInput > 30){
                document.getElementById("sCheck").innerHTML = "September only goes up to 30..."            }
            else if (userInput > 21){
                document.getElementById("sCheck").innerHTML = "Season is: Autumn"            }
            else {
                document.getElementById("sCheck").innerHTML = "Season is: Summer"
            }
        break;
        case"october":
        case"november":
            document.getElementById("sCheck").innerHTML = "Season is: Autumn"
        break;
        case"december":
            userInput = prompt("What day are we talking?\n")
            userInput = +userInput;
            if(userInput > 31){
                document.getElementById("sCheck").innerHTML = "December only goes up to 31...";
            }
            else if (userInput> 21){
                document.getElementById("sCheck").innerHTML = "Season is: Winter"
            }
            else {
                document.getElementById("sCheck").innerHTML = "Season is: Autumn"
            }
        break;
    }
    
    
}


document.getElementById("sData").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      document.getElementById("myButton").click(); // Triggers button click
    }
});