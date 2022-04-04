const API_KEY = "9d19c7ff8db30f80a1b449e38032a416";

function ongeoOk(position) {
    const latit = position.coords.latitude;
    const longi = position.coords.longitude;
    const API_URL = `https://api.openweathermap.org/data/2.5/weather?lat=${latit}&lon=${longi}&appid=${API_KEY}&units=metric`;
    // console.log("너의 위치는", latit, longi);
    // console.log(API_URL);
    fetch(API_URL)
        .then((response) => response.json())
        .then((data) => {
            const weatherContainer = document.querySelector("#weather span:first-child");
            const cityContainer = document.querySelector("#weather span:last-child");
            const name = data.name;
            const weather = data.weather[0].main;
            const temp = Math.round(data.main.temp); //기온 반올림 추가

            weatherContainer.innerText = `${weather}`;
            cityContainer.innerText = `${name} ${temp} °C`;

            // console.log(data.name, data.weather[0].main);
        });
}

function ongeoError() {
    alert("현재 날씨 정보를 찾을 수 없습니다.");
}

navigator.geolocation.getCurrentPosition(ongeoOk, ongeoError); //위치정보를 찾는 함수 ! navigator.geolocation :
