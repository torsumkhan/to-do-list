//Selectors
const removeItem = document.querySelector(".new-to-do");
const todoInput = document.querySelector(".to-do-input");
const todoButton = document.querySelector(".to-do-button");
const todoList = document.querySelector(".to-dos");
const filterOption = document.querySelector(".filter");

//Event Listeners
todoButton.addEventListener("click", addToDo);
todoList.addEventListener("click", deleteCheck);
todoList.addEventListener("click", completeCheck);
filterOption.addEventListener("click", filterToDo);

//Functions
function addToDo(event) {
  event.preventDefault();
  const toDoDiv = document.createElement("div");
  toDoDiv.classList.add("todo");

  const newToDo = document.createElement("li");
  newToDo.classList.add("new-to-do");
  newToDo.innerText = todoInput.value;

  toDoDiv.appendChild(newToDo);

  const delButton = document.createElement("button");
  delButton.innerHTML = '<i class="fa-solid fa-ban"></i>';
  delButton.classList.add("del-button");
  toDoDiv.appendChild(delButton);

  const checkButton = document.createElement("button");
  checkButton.innerHTML = '<i class="fa-solid fa-check"></i>';
  checkButton.classList.add("check-button");
  toDoDiv.appendChild(checkButton);

  todoList.appendChild(toDoDiv);

  todoInput.value = "";
}

function deleteCheck(event) {
  const item = event.target;
  if (item.classList[0] === "del-button") {
    const todo = item.parentElement;
    todo.remove();
  }
}

function completeCheck(event) {
  const item = event.target;

  if (item.classList[0] === "check-button") {
    const todo = item.parentElement;
    todo.classList.add("completed");
    console.log(todo);
  }
}

function filterToDo(event) {
  const todos = todoList.childNodes;
  todos.forEach(function (todo) {
    switch (event.target.value) {
      case "All":
        break;
      case "completed":
        if (todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
    }
  });
}
