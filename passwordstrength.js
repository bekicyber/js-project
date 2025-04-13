let password = document.getElementById('passwordinput');
const hidepass = document.getElementById('hidepassword');
const strength = document.getElementById('strengthpass');
const cstrength = document.getElementById('strength');

hidepass.addEventListener("click",showicon);
password.addEventListener("input",showstrength);

function showicon(){
    if (password.type == "password") {
        password.type = "text";
        hidepass.src = 'eye-open-3.png';
    } else {
        password.type = "password";
        hidepass.src = 'hide.jpg';
    }
}

function showstrength(){
    if (password.value.length > 0) {
        cstrength.style.display = 'block';
    } else {
        cstrength.style.display = 'none';
    };
    
    if (password.value.length < 4) {
        strength.innerHTML = "password is weak";
        strength.style.color = 'red';
    }    
    else if (password.value.length >= 4 && password.value.length < 8) {
        strength.innerHTML = "password is medium";
        strength.style.color = 'orange';
    }
   else if(password.value.length >= 8) {
        strength.innerHTML = "password is strong";
        strength.style.color = 'green';
        
    }

}