const childBlock = document.querySelector('.child_block')
let speedBlock = 1
let parentBlockWidth = 449
let childX = 0
let childY = 0
let direction = 1
//DZ 2
const moveBlock = () => {
    if (direction === 1) {
        if (childX < parentBlockWidth) {
            childBlock.style.left = `${childX}px`
            childX++
        } else {
            direction = 2
            childX = parentBlockWidth
        }
    } else if (direction === 2) {
        if (childY < parentBlockWidth) {
            childBlock.style.top = `${childY}px`
            childY++
        } else {
            direction = 3
        }
    } else if (direction === 3) {
        if (childX > 0) {
            childBlock.style.left = `${childX}px`
            childX--
        } else {
            direction = 4
            childX = 0
        }
    } else if (direction === 4) {
        if (childY > 0) {
            childBlock.style.top = `${childY}px`
            childY--
        } else {
            direction = 1
            childY = 0
        }
    }

    setTimeout(moveBlock, speedBlock)
}

moveBlock()
//dz1
const gmailInput = document.querySelector('#gmail_input')
const gmailResult = document.querySelector('#gmail_result')
const gmailBtn = document.querySelector('#gmail_button')

const ValidSyntax = /^[a-z0-9]+@gmail\.com$/i

gmailBtn.onclick = () => {
    if (ValidSyntax.test(gmailInput.value)) {
        gmailResult.innerHTML = 'Welcome, Nurdin, How are you? '
        gmailResult.style.color = 'green'
        gmailBtn.innerText = 'Я многого не прошу, только 10 баллов)'
    } else {
        gmailResult.innerHTML = 'Invalid'
        gmailResult.style.color = 'red'
        gmailBtn.innerText = 'Вот это вот реально достойно 10 баллов'
    }
}

//DZ2
document.getElementById('start').addEventListener('click', startTimer);
document.getElementById('stop').addEventListener('click', stopTimer);
document.getElementById('reset').addEventListener('click', resetTimer);
let timerInterval;
let timerRunning = false;
let timerValue = 0;
const timerDisplay = document.getElementById('secondsS');

function startTimer() {
    if (!timerRunning) {
        timerInterval = setInterval(() => {
            timerValue++;
            timerDisplay.textContent = timerValue;
        }, 1000);
        timerRunning = true;
    }
}

function stopTimer() {
    clearInterval(timerInterval);
    timerRunning = false;
}

function resetTimer() {
    clearInterval(timerInterval);
    timerValue = 0;
    timerDisplay.textContent = timerValue;
    timerRunning = false;
}

