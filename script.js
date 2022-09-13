
const dobInput = document.querySelector("#dobInput");
const luckyNumInput = document.querySelector("#luckyNumInput");
const checkBtn = document.querySelector("#checkBtn");
const msgArea = document.querySelector("#msgArea");



function sumOfDOB(updatedDOB){
    var sum = 0;
    for(let i=0; i<updatedDOB.length; i++){
        sum = sum + Number(updatedDOB.charAt(i));
    }
    return sum;
}

function checktheLuck(){
    var dob = dobInput.value;
    var updatedDOB = dob.replaceAll("-","");
    var sum = sumOfDOB(updatedDOB)
    if(sum % Number(luckyNumInput.value) === 0){
        msgArea.innerText = "Your Birthday is Luck !"
    }else{
        msgArea.innerText = "Your Birthday is Not Luck !"
    }
}

checkBtn.addEventListener("click", checktheLuck)