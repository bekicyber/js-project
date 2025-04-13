document.getElementById('outPut').style.visibility = 'hidden';
document.getElementById('searchbtn').addEventListener('input',function(e){
    document.getElementById('outPut').style.visibility = 'visible';
    let Ibs = e.target.value;
    document.getElementById('kgoutput').innerHTML = Ibs * 0.0022046;
    document.getElementById('kiloOutput').innerHTML = Ibs*16;
    document.getElementById('poundoutput').innerHTML = Ibs*2.2046
});