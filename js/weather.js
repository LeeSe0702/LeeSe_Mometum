function ongeoOk(position) {
    const latit = position.coords.latitude;
    const longi = position.coords.longitude;
    console.log("너의 위치는", latit, longi);
}

function ongeoError() {
    alert("현재 날씨 정보를 찾을 수 없습니다.");
}

navigator.geolocation.getCurrentPosition(ongeoOk, ongeoError); //위치정보를 찾는 함수 ! navigator.geolocation :
