var toDoList = document.getElementById('toDoList');

function addItem() {
    var input = document.getElementById('input');
    var li = document.createElement('li');
    var liTxt = document.createTextNode(input.value);
    li.appendChild(liTxt);
    
    var editBtn = document.createElement('button');
    var editTxt = document.createTextNode('Edit');
    editBtn.appendChild(editTxt);
    editBtn.setAttribute("class","btn btn-warning btn-sm ml-2");
    editBtn.setAttribute("onclick","editItem(this)");
    editBtn.appendChild(editTxt);

    var deleteBtn = document.createElement('button');
    var deleteTxt = document.createTextNode('Delete');
    deleteBtn.setAttribute("class","btn btn-danger btn-sm ml-2");
    deleteBtn.setAttribute("onclick","deleteItem(this)");
    deleteBtn.appendChild(deleteTxt);
    
    li.appendChild(editBtn);
    li.appendChild(deleteBtn);
    toDoList.appendChild(li);
    
    input.value = "";
}

function editItem(a) {
    var value = prompt("Enter Update Value", a.parentNode.firstChild.nodeValue);
    a.parentNode.firstChild.nodeValue = value;
}

function deleteItem(b) {
    b.parentNode.remove();
}

function allDelete() {
    toDoList.innerHTML = "";
}


