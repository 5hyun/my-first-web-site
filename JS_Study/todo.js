const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input"); //toDoForm 안에 input이 1개라서
//const toDoInput = doucument.querySelector("todo-from input"); //위에랑 같은 의미
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos"//이렇게해야 오타시 오류 발견 가능

let toDos = [];//변경 가능한 우리가 사용하는 DB 

function saveToDos(){//로컬 스토리지에 toDos를 저장하는 함수
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos)); //앞에꺼 키 값, JSON은 문자로 바꿔서 array형태로 바꿔준다.
}

function deleteToDo(event) {//X표시를 눌렀을 때, 삭제해주는 것, event는 방금 발생한 이벤트를 준다.
    const li = event.target.parentElement;//parentElement는 이벤트의 부모 요소를 알려주는 것이다. 그래서 event.target를 이용해 부모를 얻을 수 있다.
    li.remove();//클릭한 li를 삭제한다.
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));//li.remove()를 하고서 li.id를 콘솔에 출력하면 삭제된 것의 id가 나온다. 따라서 filter를 이용하여 제거해준다. 이때 parseInt를 사용해서 li.id를 int형으로 바꿔준다.
    //그리고 filter는 False를 반환하면 제거된다. 그래서 제거된 것의 id와 일치하지 않으면 True를 반환한다.
    saveToDos();//그리고 이를 todos에 저장한다.
  }

function paintToDo(newTodo){//사이트에 목록을 출력해주는 함수
    const li = document.createElement("li");//js에서 만들어서 html에 넣는다. li를 만든다.
    li.id = newTodo.id;//handleTodosubmit에서 입력된 것의 id를 li.id로 준다.
    const span = document.createElement("span");//마찬가지로 js에서 span 만든다.
    span.innerText = newTodo.text;//화면에 보여지게한다.
    const button = document.createElement("button");//삭제 버튼
    button.innerText = "❌";//X삽입
    button.addEventListener("click", deleteToDo);//addEventListener를 이용하여 클릭 이벤트가 발생하면 deleteTodo함수를 사용해 리스트 목록를 삭제시킨다.
    li.appendChild(span);//li안에 span을 넣어줌
    li.appendChild(button);//li안에 button도 넣는다.
    toDoList.appendChild(li);//그리고 최종적으로 위에서 정의한 toDoList에 li를 넣는다.
}

function handleToDoSubmit(event){//js가 방금 발생한 event를 handleToDoSubmit의 첫번째 인자로 준다. form은 엔터를 누르면 기본적으로 Submit가 발생하는데 이를 막아주는 함수이다.
    event.preventDefault();//preventDefault()를 이용해서 Submit를 막아준다.
    const newTodo = toDoInput.value;//html의 input 안에 입력된 값을 newTodo에 넣어준다.
    toDoInput.value = "";//그리고 다시 입력값을 빈 값으로 만든다.
    const newTodoObj = {//입력된 값을 저장할 객체, text는 값, id는 Date.now() 시간값을 밀리초로 준다. id를 부여한 이유는 리스트에 같은 목록이 있으면 어떤 것을 삭제해야할지 모르기 때문이다.
      text: newTodo,
      id: Date.now(),
    };
    toDos.push(newTodoObj);//toDos, 즉 DB에 입력 객체 저장
    paintToDo(newTodoObj);//그리고 화면에 띄운다.
    saveToDos();//로컬스토리지에 저장하여 새로고침해도 안사라지게 한다.
}

toDoForm.addEventListener("submit", handleToDoSubmit)// submit가 발생하면 handleToDoSubmit를 이용해 막아준다.

const savedToDos = localStorage.getItem(TODOS_KEY)//로컬스토리지의 저장된 리스트 값

if (savedToDos) {//만약 로컬 스토리지 값이 있으면
    const parsedToDos = JSON.parse(savedToDos);//JSON.stringify([1,2,3,4])은 "[1,2,3,4]"으로 나오고
    //JSON.parse("[1,2,3,4]")은 [1,2,3,4]로 나온다.
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);//paintToDo를 parsedToDos 배열의 요소마다 실행하여 출력해준다.
}