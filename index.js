let userInputEl = document.getElementById("userInput");
let addButtonEL = document.getElementById("addButton");
let todosContainerEl = document.getElementById("todoContainer");
let saveButtonEl = document.getElementById("saveButton");

saveButtonEl.onclick=function(){
    localStorage.setItem("TodoItems",JSON.stringify(todoList));
}



let todoList = getTodosFromlocalStorage();

function getTodosFromlocalStorage(){
    let strigifiedTodos = localStorage.getItem("TodoItems");
    let parsedTodos = JSON.parse(strigifiedTodos);

    if(parsedTodos===null){
        return [];
    }else{
        return parsedTodos;
    }
}

addButtonEL.onclick=function(){
    let userInput = userInputEl.value ;

    if(userInput==""){
        alert("Please enter a todo");
        return;
    }

    let todoCount = todoList.length;
    todoCount=todoCount+1;

    let newTodo = {
        text:userInput,
        uniqueNo:todoCount
    }
    createTodo(newTodo);
    todoList.push(newTodo);

    userInputEl.value="";




}

function createTodo(todo){

    let checkboxId = "checkbox"+todo.uniqueNo;
    
    let todoContainer = document.createElement("li");
    todoContainer.classList.add("todoItem");
    todosContainerEl.appendChild(todoContainer);

    let inputBox = document.createElement("input");
    inputBox.classList.add("inputEl");
    inputBox.type="checkbox";
    inputBox.id=checkboxId;
    todoContainer.appendChild(inputBox);

    let todoItemContainer = document.createElement("div");
    todoItemContainer.classList.add("todosItemContainer","d-flex","flex-row");
    todoContainer.appendChild(todoItemContainer);
   
    let labelElement = document.createElement("label");
    labelElement.setAttribute("for", checkboxId);
    labelElement.classList.add("labelEl");
    labelElement.textContent=todo.text;
     todoItemContainer.appendChild(labelElement);
    
     let deletebuttoncontainer =document.createElement("div");
     deletebuttoncontainer.classList.add("deletebuttoncontainer");
     todoItemContainer.appendChild(deletebuttoncontainer);

     let deletebutton =document.createElement("i");
     deletebutton.classList.add("fa-solid","fa-trash-can","deleteButton");
      deletebuttoncontainer.appendChild(deletebutton);

     


}

for( let todoItem of todoList){
    createTodo(todoItem);
}