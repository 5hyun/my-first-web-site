const images = [
    "0.jpeg",
    "1.jpeg",
    "2.jpeg"
];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");//js에서 만들어서 html에 넣는 것

bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage); 
//document.body.prepend(bgImage); 