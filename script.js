function addTask(){
    let input=document.getElementById("task");
    let task=input.value;

    if(task===""){
        alert("enter the task");
        return;
    }

    let li=document.createElement("li");
    li.textContent=task;
    document.getElementById("list").appendChild(li);
    input.value="";
}