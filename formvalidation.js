const fnamewrong = document.getElementById("fnamewrong");
const submitbtn = document.getElementById("addinput");
const rightimg = document.querySelector(".rightimg");
const wrongimg = document.querySelector(".wrongimg");
const phonewrong = document.querySelector(".phonewrong");
const emailwrong = document.querySelector(".emailwrong");
const btnwrong = document.querySelector(".btnwrong");
const messagerror = document.querySelector(".messagerror");
function showright(){
    const firstName = document.getElementById("fnameinput").value;
    
    if (firstName.length == 0) {
        fnamewrong.innerHTML = "First name required";
        return false;
    }
    if(!firstName.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        fnamewrong.innerHTML = "Full name is required";
        return false;
    }

    fnamewrong.innerHTML = '<i class="fa-solid fa-circle-check" style="color:seagreen;"></i>';
    return true;
}
function showphone(){
    const phone = document.getElementById("phone").value;
    if (phone.length == 0) {
        phonewrong.innerHTML = "phone no is required";
        return false;
    }
    if (phone.length !== 10) {
        phonewrong.innerHTML = "phone no shoude be 10 digits"
        return false;
    }
    if(!phone.match(/^[0-9]{10}$/)){
        phonewrong.innerHTML = "First phone no required";
        return false;
    }
    
    phonewrong.innerHTML ='<i class="fa-solid fa-circle-check" style="color:seagreen;"></i>';
    return true;
    
}
function showemail(){
    const emailinput = document.getElementById("inputemail").value;
    if (emailinput.length == 0) {
        emailwrong.innerHTML = "email is required";
        return false;
    }
    if(!emailinput.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        emailwrong.innerHTML = "invalid email";
        return false;
    }

    emailwrong.innerHTML = '<i class="fa-solid fa-circle-check" style="color:seagreen;"></i>';
    return true;
}

function showcomment(){
    const commenttext = document.getElementById("commontarea").value;
    var required = 30;
    var left = required - commenttext.length;
    
    if (left > 0) {
        messagerror.innerHTML = left + "more character required";
        return false;
    }
    messagerror.innerHTML = '<i class="fa-solid fa-circle-check" style="color:seagreen;"></i>';
    return true;
}

function showsub(){
    if (!showright() || !showphone() || !showemail()) {
        btnwrong.innerHTML = "please fix error to submit";
        setTimeout(function(){
            btnwrong.style.display ="none";
        },3000)
        return false;
    }
}