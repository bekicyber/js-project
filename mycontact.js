let fliterName = document.getElementById('fliterbtn');
fliterName.addEventListener('keyup',searchNames);

function searchNames(){
    let fliterValue = document.getElementById('fliterbtn').value.toUpperCase();

    let ul = document.getElementById('unorder-list');
    let li = ul.querySelectorAll('li.listItem');

    for (let i = 0; i < li.length; i++) {
        let a = li[i].getElementsByTagName('a')[0];
        if (a.innerHTML.toUpperCase().indexOf(fliterValue) > -1) {
           li[i].style.display = ''; 
        } else {
            li[i].style.display = 'none';
        }
        
    }
}