const elForm = document.querySelector("#signUp");
elForm.style.display ="none";
const elOutput = document.querySelector('#output');
const elEmail = document.querySelector('#txtNamn')
const elPassword = document.querySelector('#txtPassword')


function toggleFunction() {

    if (elForm.style.display === "none") {
        elForm.style.display = "block";
    } else {
        elForm.style.display = "none";
    }
}



function signUp(event){
    event.preventDefault();

    if(!elEmail.value.includes("@")){
        elOutput.textContent = "Invalid Email";
    }
    else if(elPassword.value.length < 8){
        elOutput.textContent = "Password must contain at least 8 characters"
    }
    else{
    	elOutput.textContent = "Email registered";
    }    
}
elForm.addEventListener('submit', signUp, false);




