const billAmount = document.querySelector("#Bill-amount");
const cashGiven = document.querySelector("#Cash-given");
const btnCheck = document.querySelector("#btn-check");
const errorMsg = document.querySelector("#error-message");
const notesNumber = document.querySelectorAll(".noOfNotes");
const collap = document.querySelector(".collap")
const table = document.querySelector(".table")

const denominationNotes = [2000, 500, 100, 50, 20, 10, 5, 1]
hideData()
btnCheck.addEventListener("click", function () {
    hideMessage();
    
      
    if (billAmount.value > 0) {
        if (cashGiven.value > 0) {

            const amountToBePaid = cashGiven.value -  billAmount.value;
            if (amountToBePaid >= 0) {
            hideMessage();
              amountHandler(amountToBePaid)
          
            }
            else {
                errorHandler("Bill amount being paid is less than Total Bill")
            }

        }
        else {
            errorHandler("Amount should be greater than 0")
        }

    }
    else {
        errorHandler("Amount should be greater than 0")
    }

})


function hideMessage(){
    errorMsg.style.display = "none"
}

function hideData(){
    table.style.display ="none"
}

function errorHandler(messageError) {
    errorMsg.style.display= "block";
    errorMsg.innerText = messageError;
   
   
}

function amountHandler(amountToBePaid){
    for (let i = 0; i < denominationNotes.length; i++) {
        collap.style.display = "none"
        table.style.display ="initial"
        const numberOfNotes =Math.trunc(amountToBePaid /  denominationNotes[i])
        amountToBePaid = amountToBePaid % denominationNotes[i]
        notesNumber[i].innerText= numberOfNotes;
        
    }
    
}



