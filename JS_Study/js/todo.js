const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input"); //toDoForm 안에 input이 1개라서
//const toDoInput = doucument.querySelector("todo-from input"); //위에랑 같은 의미
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos"

let toDos = [];

function saveToDos(){
    localStorage.setItem("todos", JSON.stringify(toDos)); //앞에꺼 키 값, JSON은 문자로 바꿔서 array형태로 바꿔준다.
}

function deleteToDo(event){
    const li = event.target.parentElement;
    li.remove();
}

function paintToDo(newTodo){
    const li = document.createElement("li");
    const span = document.createElement("span");
    const button = document.createElement("button");
    span.innerText = newTodo;
    button.innerText = "❌";
    button.addEventListener("click", deleteToDo);
    li.appendChild(span);//li안에 span을 넣어줌
    li.appendChild(button);
    toDoList.appendChild(li);
}

function handleToDoSubmit(event){//js가 방금 발생한 event를 handleToDoSubmit의 첫번째 인자로 준다.
    event.preventDefault()
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    toDos.push(newTodo);
    paintToDo(newTodo);
    saveToDos()
}

toDoForm.addEventListener("submit", handleToDoSubmit)

const savedToDos = localStorage.getItem(TODOS_KEY)

if (saveToDos){
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}