var inputtask = document.getElementsByClassName('inputtask')[0];
var entertask = document.getElementById('button');
var tasklist = document.getElementById("tasks");
var removetask = document.getElementById("button2");

function inputTaskLength() {
    return inputtask.value.length;
}

function addTask() {
    if(inputTaskLength() > 0) {
        var li = document.createElement('li'); //creates a new element
        li.appendChild(document.createTextNode(inputtask.value)); //adds text node
        tasklist.appendChild(li); //adds the created li to ul
        li.classList.add("itemlist");

        var dlt = document.createElement('button');
        dlt.appendChild(document.createTextNode('Delete'));
        dlt.classList.add("dlt");
        li.appendChild(dlt);

        inputtask.value = ""; //resets the textbox after adding the task
    }
}

function addTaskByClick() {
    addTask();
}

function addTaskByEnterKey(event) {
    if(event.keyCode === 13){ // key code for enter = 13
        addTask();
    }
}

function removeAll() {
    while(tasklist.firstChild) {
        tasklist.removeChild(tasklist.firstChild);
    }
}

function toggleDone(target) {
    if(target.tagName === "LI") {
        target.classList.toggle("done");
    }
}

function deleteTask(target) {
    if(target.tagName === "BUTTON") {
        var li = target.parentElement;
        target.remove();
        li.remove();
    }
}

function listClick(event) {
    var target = event.target;
    toggleDone(target);
    deleteTask(target);
}

entertask.addEventListener("click", addTaskByClick)

inputtask.addEventListener("keypress", addTaskByEnterKey)

removetask.addEventListener("click", removeAll)

tasklist.onclick = listClick;
// 69 Lines POG