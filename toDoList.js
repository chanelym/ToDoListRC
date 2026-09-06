let input=document.getElementById("specificTask");
let list=document.getElementById("list");
let button=document.getElementById("addButton");

function addTask() {
 let task=document.createElement("li");
    task.innerHTML=input.value;

let deleteButton=document.createElement("button");
    deleteButton.innerHTML="All Done!";

deleteButton.onclick=
function() {
    task.remove();
};

task.appendChild(deleteButton);
list.appendChild(task);
}

button.onclick=addTask;