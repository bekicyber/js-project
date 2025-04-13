document.getElementById('output').style.visibility = 'hidden';

document.getElementById('dollarCurrency').addEventListener('input',function(e){
    document.getElementById('output').style.visibility = 'visible'
let birr = e.target.value;
if (birr*156 >= 0) {
    document.getElementById('dollar').innerHTML = birr + 'Dollar' + '=' + birr*156 +' ' + 'Birr';
} else {
    document.getElementById('dollar').innerHTML = 'none';
};

if (birr*170 >= 0) {
    document.getElementById('Euro').innerHTML = birr + 'Euro' + '=' + birr*170 +' ' + 'Birr';
} else {
    document.getElementById('Euro').innerHTML = 'none';
};

if (birr*208 >= 0) {
    document.getElementById('Pound').innerHTML = birr + 'Pound' + '=' + birr*208 +' ' + 'Birr';
} else {
    document.getElementById('Pound').innerHTML = 'none';
};

if (birr*125 >= 0) {
    document.getElementById('frank').innerHTML = birr + 'Swiss Frank' + '=' + birr*125 +' ' + 'Birr';
} else {
    document.getElementById('frank').innerHTML = 'none';
};
})