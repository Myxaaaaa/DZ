const phoneInput = document.querySelector('#phone_input')
const phoneResult = document.querySelector('#phone_result')
const phoneButton = document.querySelector('#phone_button')

const regExp = /^\+996 [25793]\d{2} \d{2}-\d{2}-\d{2}$/

phoneButton.onclick = () => {
   if (regExp.test(phoneInput.value)) {
       phoneResult.innerHTML = 'OK'
       phoneResult.style.color = 'green'
   }else {
       phoneResult.innerHTML = 'NOT OK'
       phoneResult.style.color = 'red'
   }
}