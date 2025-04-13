let hideimage = document.getElementById("hideimage");
const password = document.getElementById('password')
hideimage.addEventListener('click',showicon);

function showicon(){
    if (password.type == "password") {

        password.type = "text";
        hideimage.src = 'eye-open-3.png'
    } else {
        password.type = "password";
        hideimage.src = 'hide.jpg';
    }
}