const addbtn = document.querySelector('.addbtn');
const inputbox = document.querySelector('.inpu-box');
addbtn.addEventListener("click",showbox);
function showbox(){
    let newpara = document.createElement('P');
    let imageshow = document.createElement('img');
    newpara.setAttribute("contenteditable","true");
    imageshow.src = 'empty.png'
    newpara.className = 'input-fild';
   

inputbox.appendChild(newpara).appendChild(imageshow);
}
inputbox.addEventListener("click",function(e){
    if (e.target.tagName === "IMG") {
        e.target.parentElement.remove();
    }
    
})