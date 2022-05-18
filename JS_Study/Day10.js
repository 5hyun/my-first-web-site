const clockTitle = document.querySelector(".js-clock");

function getTime() {
    const xmas = new Date("2022-12-25 00:00:00+0900");
    const today = new Date();
    const dday = xmas - today;
    const day = String(Math.floor(dday / (1000 * 60 * 60 * 24))).padStart(2, "0");
    const hour = String(Math.floor((dday / (1000 * 60 * 60)) % 24)).padStart(2, "0");
    const min = String(Math.floor(((dday / 1000) * 60) % 60)).padStart(2, "0");
    const sec = String(Math.floor((dday / 1000) % 60)).padStart(2, "0");
    clockTitle.innerText = (`${day}d ${hour}h ${min}m ${sec}s`);
}

getTime()
setInterval(getTime, 1000);