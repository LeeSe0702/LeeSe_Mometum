const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector("#todo-list");

// List 생성
function paintToDo(newToDo) {
    //여기서 리스트 생성해줄거야.
    const toDoListLi = document.createElement("li");
    const toDoListSpan = document.createElement("span");
    toDoListLi.appendChild(toDoListSpan);
    toDoListSpan.innerText = newToDo;
    // console.log(li); //확인용
    toDoList.appendChild(toDoListLi);
}

// Submit 구현
function handleToDoSubmit(event) {
    event.preventDefault();
    console.log(toDoInput.value);

    const newToDo = toDoInput.value;
    toDoInput.value = "";
    paintToDo(newToDo); //입력하는걸 리스트에 넣어줄거야.
}
toDoForm.addEventListener("submit", handleToDoSubmit);
