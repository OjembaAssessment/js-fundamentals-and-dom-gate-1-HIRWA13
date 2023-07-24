
const timer = document.querySelector('#timer');
const addBtn = document.querySelector('#add');
const substractBtn = document.querySelector('#substract');
const resetBtn = document.querySelector('#reset');
const startBtn = document.querySelector('#start');
let seconds = 0;
let intervalId = null;


// event listeners
addBtn.addEventListener('click', function () {
    seconds++;
    timer.innerText = seconds;
});
substractBtn.addEventListener('click', function () {
    if (seconds > 0) {
        seconds--;
        timer.innerText = seconds;
    }
});
resetBtn.addEventListener('click', function () {
    seconds = 0;
    timer.innerText = seconds;
});

startBtn.addEventListener('click', function () {
    if (intervalId) {
        clearInterval(intervalId);
        intervalId = null;
        startBtn.innerText = 'Start';
        addBtn.disabled = false;
        substractBtn.disabled = false;
    } else {
        intervalId = setInterval(function () {
            if (seconds > 0) {
                seconds--;
                timer.innerText = seconds;
            } else {
                clearInterval(intervalId);
                intervalId = null;
                startBtn.innerText = 'Start';
                addBtn.disabled = false;
                substractBtn.disabled = false;
            }
        }, 1000);
        startBtn.innerText = 'Stop';
        addBtn.disabled = true;
        substractBtn.disabled = true;
    }
});