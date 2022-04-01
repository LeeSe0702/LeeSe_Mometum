const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector("#todo-list");

let toDos = [];
const TODOS_KEY = "todos";
function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos)); //JSON.stringify() array를 문자열로 바꿔준다?
}

//삭제버튼 구현
function handleVoidButton(event) {
    console.log("To-Do List 삭제 - 1");
    const li = event.target.parentElement;
    //리스트에서 지우기전에 로컬 저장소에서 지우자. !
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id)); //필터 처리로, False일 경우 지운다.
    saveToDos();
    li.remove();
}

// List 생성
function paintToDo(newToDo) {
    //여기서 리스트 생성해줄거야.
    const toDoListLi = document.createElement("li");
    const toDoListSpan = document.createElement("span");
    //To-Do List에서 삭제하고픈 버튼 생성하기
    const toDoVoidButton = document.createElement("button");
    toDoVoidButton.innerText = "❌";
    toDoVoidButton.addEventListener("click", handleVoidButton);

    toDoListLi.id = newToDo.id;
    toDoListSpan.innerText = newToDo.text;

    toDoListLi.appendChild(toDoListSpan);
    toDoListLi.appendChild(toDoVoidButton);
    toDoList.appendChild(toDoListLi);
}

// Submit 구현
function handleToDoSubmit(event) {
    event.preventDefault();
    console.log(toDoInput.value);

    const newToDo = toDoInput.value;
    const newToDoObj = {
        text: newToDo,
        id: Date.now(),
    };
    toDoInput.value = "";
    toDos.push(newToDoObj); //리스트에 넣기전에 로컬저장소에 저장
    paintToDo(newToDoObj); //입력하는걸 리스트에 넣어줄거야.
    saveToDos();
}
toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

// function sayHello(item) {
//     console.log("이번순서는? ", item);
// }

if (savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    console.log(parsedToDos);
    // parsedToDos.forEach(sayHello);
    // parsedToDos.forEach((item) => console.log("여기가 ", item));
    // parsedToDos.forEach((item) => paintToDo(item));
    parsedToDos.forEach(paintToDo);
}
