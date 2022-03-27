const clock = document.querySelector("#clock");

function getClock() {
    const date = new Date();
    const hour = String(date.getHours()).padStart(2, "0"); //시
    const min = String(date.getMinutes()).padStart(2, "0"); //분
    const sec = String(date.getSeconds()).padStart(2, "0"); //초
    // console.log(`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`);
    clock.innerText = `${hour}:${min}:${sec}`;
}
getClock(); //처음 실행시 가져옴 (1초 텀 없애기 위해!! )
setInterval(getClock, 10);

function sayHello() {
    console.log("hello");
}
// //setInterval(Funciton명, ms (1000= 1초) ) << 정해진 시간마다 함수 호출
// setInterval(sayHello, 1000);

// //setTimeout (Function , ms (1000= 1초) ) << 정해진 시간 뒤에 함수 호출.. !
// setInterval(sayHello, 5000);
