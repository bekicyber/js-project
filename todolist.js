var Form = document.getElementById("inputButton");
var listItem = document.getElementById("unorder");


Form.addEventListener("submit",todolist)
function todolist(e){
    e.preventDefault();
    var newForm = document.getElementById("item").value;
    var li = document.createElement("li");
    li.className = "liclass";
    li.appendChild(document.createTextNode(newForm));

    var todoCheck = document.createElement("button")
    todoCheck.className = "btn-read";
    todoCheck.appendChild(document.createTextNode("O"));
    li.appendChild(todoCheck);

    listItem.appendChild(li);
}