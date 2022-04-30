const clock = document.querySelector("h2#clock"); //혹은 #clock이나 clock로만 써도된다. h2 + id로 사용하는 방식을 사용했다.

function getClock(){
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const Minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = (`${hours}:${Minutes}:${seconds}`);
}

getClock()
setInterval(getClock, 1000);