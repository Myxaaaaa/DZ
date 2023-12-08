const ball = document.querySelector('.child_block')
let ballZero = 0
const balLeft = ()=> {
    ball.style.left = `${ballZero}px`
    ballZero++
    if (ballZero < 450){
        requestAnimationFrame(balLeft)
    }
}

balLeft()

const gmailInput = document.querySelector('#gmail_input')
const gmailResult = document.querySelector('#gmail_result')
const gmailBtn = document.querySelector('#gmail_button')

const ValidSyntax = /^[a-z0-9]+@gmail\.com$/i;

gmailBtn.onclick = () => {
    if (ValidSyntax.test(gmailInput.value)) {
        gmailResult.innerHTML = 'Welcome, Nurdin, How are you? ';
        gmailResult.style.color = 'green';
        gmailBtn.innerText = 'Я многого не прошу, только 10 баллов)'
    } else {
        gmailResult.innerHTML = 'Invalid';
        gmailResult.style.color = 'red';
        gmailBtn.innerText = 'Вот это вот реально достойно 10 баллов'
    }
}
