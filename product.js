const product = document.getElementById("imageproduct");
const btn = document.getElementsByClassName("btn");
const backgroundc = document.querySelector(".container")

btn[0].onclick = function(){
    product.src = "image/product1.png";
    backgroundc.style.background = "black"
    for(bt of btn){
        bt.classList.remove("active");}
   this.classList.add("active");
}
btn[1].onclick = function(){
    product.src = "image/product2.png";
    backgroundc.style.background = "white"
    for(bt of btn){
        bt.classList.remove("active");}
    this.classList.add("active");
}
btn[2].onclick = function(){
    backgroundc.style.background = "white"
    product.src = "image/product3.png";
    for(bt of btn){
        bt.classList.remove("active");}
    this.classList.add("active");
}