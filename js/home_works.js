const ball = document.querySelector('.child_block') //украл этот блок у HTML, теперь он в моих руках:)
let ballZero = 0 // ставлю значение 0 по дефолту
const balLeft = ()=> {
    ball.style.left = `${ballZero}px` // здесь добавляю стиль (left) к нашему ballZero у которого значение 0 пикселей
    ballZero++
    if (ballZero < 450){ // тут такая шайтан машина, продолжать увеличивать пиксели если наше колесико меньше 450 пикселей
        requestAnimationFrame(balLeft)
        //Здесь я использовал requestAnimationFrame, для того чтобы колесо плавно шло направо
    }
}

balLeft()

const gmailInput = document.querySelector('#gmail_input')
const gmailResult = document.querySelector('#gmail_result')
const gmailBtn = document.querySelector('#gmail_button') //собрал все нужные дом элементы

const ValidSyntax = /^[a-z0-9]+@gmail\.com$/i; //здесь сделал, начало строки от A до Z и цифры от 0 до 9, так же сделал чтоб использовалось только @gmail.com

gmailBtn.onclick = () => {
    if (ValidSyntax.test(gmailInput.value)) {
        gmailResult.innerHTML = 'Welcome, Nurdin, How are you? ';
        gmailResult.style.color = 'green';
        gmailBtn.innerText = 'Я многого не прошу, только 10 баллов)'//здесь если пользователь введет все правильно с @gmail.com то все верно и выведется текст который я написал
    } else {
        gmailResult.innerHTML = 'Invalid';
        gmailResult.style.color = 'red';
        gmailBtn.innerText = 'Вот это вот реально достойно 10 баллов' //здесь можете проверить, если написать правильно все буквы и цифры, и указать вместо @gmail.com что то другое, то выведется ошибка
    }
}
