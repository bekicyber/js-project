var form = document.getElementById("addForm");
var unorder = document.getElementById("unorder-list");
var filter = document.getElementById("searchitem")

form.addEventListener("submit", addItem);
unorder.addEventListener("click",removeitems);
filter.addEventListener("keyup",filtermethod)

function addItem(e){
e.preventDefault();

var newItem = document.getElementById("searchbtn").value;
    var li = document.createElement("li");
    li.className = "itemclass";

    li.appendChild(document.createTextNode(newItem));

    
//delet button

var deleteBtn = document.createElement("BUtton");
deleteBtn.className = "deletebtn"
deleteBtn.appendChild(document.createTextNode("X"));

li.appendChild(deleteBtn);

    unorder.appendChild(li);
}


function removeitems(e){
    if (e.target.classList.contains("deletebtn")) {
        if (confirm("Are you sure ?")) {
            var li = e.target.parentElement;
            unorder.removeChild(li);
        }
    }
}

function filtermethod(e){
   var text = e.target.value.toLowerCase();
   var intername = unorder.getElementsByTagName("li");
Array.from(intername).forEach(function(searchbtn){
 var itemName = searchbtn.firstChild.textContent;
 if (itemName.toLocaleLowerCase().indexOf(text) != -1) {
    searchbtn.style.display = "block"
 }else{
    searchbtn.style.display = "none"
 }
})
}
