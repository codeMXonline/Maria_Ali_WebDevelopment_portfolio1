const textArea = document.querySelector(".textarea");
console.log(textArea);

const button = document.querySelector(".buttoninput");

const todoList = document.querySelector(".todolist");

button.addEventListener("click",addToDoListItem);

function addToDoListItem(){

    const toDoDiv= document.createElement("div");
    // adds the style to the js
    toDoDiv.classList.add("itemall");

    const item = document.createElement("p");
    // adds the style to the js
    item.classList.add("item");
    button.classList.add("buttoninput");

    item.innerHTML=textArea.value;

    toDoDiv.appendChild(item);

    if (textArea.value == '') return;

    const deleteButton = document.createElement("button");
    toDoDiv.appendChild(deleteButton);
    

    console.log(toDoDiv);

   deleteButton.innerHTML = '<i class="fas fa-trash"></i>';
    deleteButton.classList.add("trash-button");
    


    todoList.appendChild(toDoDiv);
    textArea.value = '';

}

todoList.addEventListener("click",deleteItem);
function deleteItem(e){
  const item = e.target;
  console.log(item);

  
  if (item.classList[0] === "trash-button"){
   const parent = item.parentElement;
   parent.remove();
  }

}