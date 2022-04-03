// const loginForm = document.getElementById('#login-form');
// const loginInput = document.querySelector('#login-form input');
// const loginButton = document.querySelector('#login-form button');

// loginButton.addEventListener('click', onLoginButtonClick);

const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const clockDoc = document.querySelector("#clock");
const quoteDoc = document.querySelector("#quote");
const weatherDoc = document.querySelector("#weather");
const todoFormDoc = document.querySelector("#todo-form");
const todoListDoc = document.querySelector("#todo-list");

const HIDDEN_CLASS_NAME = "hidden";
const USERNAME_KEY = "userName";

function onLoginSubmit(event) {
    event.preventDefault(); //브라우저의 기본 동작을 막아주는 함수임.
    //console.log(event);
    const userName = loginInput.value;
    loginForm.classList.add(HIDDEN_CLASS_NAME);
    //정보 입력후 입력필드 hidden
    // console.log(userName);

    //로컬 스토리지에 이름 저장하기
    localStorage.setItem(USERNAME_KEY, userName);

    paintGreetings(userName);
}

function paintGreetings(username) {
    //글자 써주는 부분을 함수화.. !
    greeting.innerText = `안녕?  ${username}.  `;
    greeting.classList.remove(HIDDEN_CLASS_NAME);
    clockDoc.classList.remove(HIDDEN_CLASS_NAME);
    quoteDoc.classList.remove(HIDDEN_CLASS_NAME);
    weatherDoc.classList.remove(HIDDEN_CLASS_NAME);
    todoFormDoc.classList.remove(HIDDEN_CLASS_NAME);
    todoListDoc.classList.remove(HIDDEN_CLASS_NAME);
}

const savedUserName = localStorage.getItem(USERNAME_KEY);

if (savedUserName === null) {
    //show Main Form
    loginForm.classList.remove(HIDDEN_CLASS_NAME);
    // console.log(loginForm.classList.contains(HIDDEN_CLASS_NAME));
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    //show Hello Form
    paintGreetings(savedUserName);
}
