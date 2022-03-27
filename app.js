// const loginForm = document.getElementById('#login-form');
// const loginInput = document.querySelector('#login-form input');
// const loginButton = document.querySelector('#login-form button');

// loginButton.addEventListener('click', onLoginButtonClick);

const loginForm = document.querySelector('#login-form');
const loginInput = document.querySelector('#login-form input');

function onLoginSubmit(event) {
    event.preventDefault(); //브라우저의 기본 동작을 막아주는 함수임.
    //console.log(event);
    const userName = loginInput.value;
    console.log(userName);
}

loginForm.addEventListener('submit', onLoginSubmit);

// const link = document.querySelector('a');
// function handleLinkClick(event) {
//     // alert('click!!');
//     console.dir(event);
//     event.preventDefault();
// }
// link.addEventListener('click', handleLinkClick);
