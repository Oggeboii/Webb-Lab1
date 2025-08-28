const elForm = document.querySelector("#signUp");
elForm.style.display ="none";
const elOutput = document.querySelector('#output');
const elEmail = document.querySelector('#txtEmail')
const elPassword = document.querySelector('#txtPassword')
const elUserList = document.querySelector('#userList')


function showForm(button) {

    button.style.display = "none";

    if (elForm.style.display === "none") {
        elForm.style.display = "block";
    } else {
        elForm.style.display = "none";
    }
}

if(!localStorage.getItem("usersInfo")){
    localStorage.setItem("usersInfo", JSON.stringify([]));
}

function getUsers(){
    return JSON.parse(localStorage.getItem("usersInfo")) || []; 
}


function signUp(event){

    let users = getUsers();
    const email =  elEmail.value;
    const password = elPassword.value;

    event.preventDefault();

    if(!email.includes("@")){
        elOutput.textContent = "Invalid Email";
    }

    else if(password.length < 8){
        elOutput.textContent = "Password must contain at least 8 characters"
    }

    else if(users.some(user => user.email === email)){
        elOutput.textContent = "Email already registered"
    }

    else{
        users.push({email, password});
        localStorage.setItem("usersInfo", JSON.stringify(users));
    	elOutput.textContent = "Email registered";
    }  
      
}
elForm.addEventListener('submit', signUp, false);




