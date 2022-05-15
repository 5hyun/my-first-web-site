const toggleBtn = document.querySelector(".nav__toggleBtn");
const menu = document.querySelector(".nav__menu");
const icon = document.querySelector(".nav__icon");

toggleBtn.addEventListener("click", () => {
    menu.classList.toggle('active');
    icon.classList.toggle('active');
    }
)