const popupbtn = document.getElementById('popupbtn');
const popup = document.querySelector('.popup').style.visibility = "hidden";
const popupcont = document.querySelector('.container');
const okbtn = document.getElementById('okbtn');

popupbtn.addEventListener('click',shoupopup);
okbtn.addEventListener('click',showsubmit)

function shoupopup(){
    //document.querySelector('.popup').style.visibility = "visible";
    //popupcont.remove();

    if (popup == "hidden" || popupbtn == "visible") {
        document.querySelector('.popup').style.visibility = "visible";
        popupbtn.style.visibility = "hidden";
    } 
    
}
function showsubmit(){
    document.querySelector('.popup').style.visibility = "hidden";
    popupbtn.style.visibility = "visible";

}