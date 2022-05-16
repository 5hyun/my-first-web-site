const getRange = document.querySelector(".Range input");
const getNumInput = document.querySelector(".NumInput input");
const playBtn = document.querySelector('.NumInput Button');
const Result = document.querySelector('.Result span');

playBtn.addEventListener('click', () => {
        if (getRange.value && getNumInput.value &&
            getNumInput.value >= 0) {
            const RandomValue = Math.round(Math.random() * getRange.value);
            let WinLose = "";
            if (getNumInput.value >= RandomValue) {
                WinLose = "won";
            } else {
                WinLose = "lost"
            }

            Result.innerText = `You chose: ${getNumInput.value}, the machine chose: ${RandomValue}.
            You ${WinLose}!`;
        }
    }
)
