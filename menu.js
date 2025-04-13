const inputfild = document.getElementById("btnselect");
const socialmedia = document.getElementById("listsocial").style.visibility = "hidden";
const facebook = document.getElementById("facebook");
const telegram = document.getElementById("telegram");
const youtube = document.getElementById("youtube");
const instagram = document.getElementById("instagram");
const tiktok = document.getElementById("tiktok");

inputfild.addEventListener("click", showlist);

function showlist(){
    document.getElementById("listsocial").style.visibility = "visible";
    inputfild.style.width = "217.06px";
    inputfild.style.height = "34.4px"
}
function showfacebook(){
    document.getElementById("listsocial").style.visibility = "hidden";
    inputfild.innerHTML = "Facebook";
}
function showinsta(){
    document.getElementById("listsocial").style.visibility = "hidden";
    inputfild.innerHTML = "instagram";
}
function showtiktok(){
    document.getElementById("listsocial").style.visibility = "hidden";
    inputfild.innerHTML = "tiktok";
}
function showtelegram(){
    document.getElementById("listsocial").style.visibility = "hidden";
    inputfild.innerHTML = "telegram";
}
function showyoutebe(){
    document.getElementById("listsocial").style.visibility = "hidden";
    inputfild.innerHTML = 'youtube';
    
}
