const colors = [
    "#ef5777",
    "#575fcf",
    "#4bcffa",
    "#34e7e4",
    "#0be881",
    "#f53b57",
    "#3c40c6",
    "#0fbcf9",
    "#00d8d6",
    "#05c46b",
    "#ffc048",
    "#ffdd59",
    "#ff5e57",
    "#d2dae2",
    "#485460",
    "#ffa801",
    "#ffd32a",
    "#ff3f34"
];

const Btn = document.querySelector("button");
function BackChange() {
    const Random1 = colors[Math.floor(Math.random() * colors.length)];
    const Random2 = colors[Math.floor(Math.random() * colors.length)];
    const col = `linear-gradient(to right, ${Random1}, ${Random2})`;
    document.body.style.background = col;
}

Btn.addEventListener("click", BackChange);
