const title = document.querySelector("h2");
title.style.color = "white";

function BackColorChange() {
    let width = window.innerWidth;

    if (width < 700) {
        document.body.style.backgroundColor = "skyblue";
    } else if (width >= 700 && width <= 1300) {
        document.body.style.backgroundColor = "purple";
    } else {
        document.body.style.backgroundColor = "orange";
    }
}

BackColorChange();
window.addEventListener("resize", BackColorChange);