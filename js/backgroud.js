const images = ["0.jpg", "1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg"];
const todayImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img"); //createElement 태그작성시 생성됨!

bgImage.src = `img/bg_img/${todayImage}`;
// console.log(bgImage);
// document.body.appendChild(bgImage); //생성한 요소를 화면에 뿌려줌!!
document.body.prepend(bgImage); //생성한 요소를 화면에 뿌려줌!!
