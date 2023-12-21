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

const tabContentBlocks = document.querySelectorAll('.tab_content_block')
const tabs = document.querySelectorAll('.tab_content_item')
const tabsParent = document.querySelector('.tab_content_items')
let slideIndex = 0
let intervalId

const hideTabContent = () => {
    tabContentBlocks.forEach((tabCard) => {
        tabCard.style.display = "none"
    })
    tabs.forEach((tab) => {
        tab.classList.remove('tab_content_item_active')
    })
}

const showTabContent = (tabIndex = 0) => {
    hideTabContent()
    tabContentBlocks[tabIndex].style.display = "block"
    tabs[tabIndex].classList.add('tab_content_item_active')
}

const startSlider = () => {
    intervalId = setInterval(() => {
        slideIndex = (slideIndex + 1) % tabs.length
        showTabContent(slideIndex)
    }, 3000)
}

const stopSlider = () => {
    clearInterval(intervalId)
}

tabs.forEach((tab, tabIndex) => {
    tab.addEventListener('click', () => {
        slideIndex = tabIndex
        showTabContent(slideIndex)
        stopSlider()
    })
})

tabsParent.addEventListener('mouseenter', stopSlider)
tabsParent.addEventListener('mouseleave', startSlider)

hideTabContent()
showTabContent(slideIndex)
startSlider()

//CONVERTER

const som = document.querySelector('#som')
const usd = document.querySelector('#usd')
const eur = document.querySelector('#eur')
const tenge = document.querySelector('#tenge')

const converter = (element, targetElement, current) => {
    element.oninput = () => {
        const xhr = new XMLHttpRequest()
        xhr.open('GET', '../data/converter.json')
        xhr.setRequestHeader('Content-type', 'application/json')
        xhr.send()
        xhr.onload = () =>{
            const data = JSON.parse(xhr.response)

            const inputValue = parseFloat(element.value)

            if (!isNaN(inputValue)) {
                switch (current) {
                    case "som":
                        usd.value = (inputValue / data.usd).toFixed(2)
                        eur.value = (inputValue / data.eur).toFixed(2)
                        tenge.value = (inputValue / data.tenge).toFixed(2)
                        break
                    case "usd":
                        som.value = (inputValue * data.usd).toFixed(2)
                        eur.value = (som.value / data.eur).toFixed(2)
                        tenge.value = (som.value / data.tenge).toFixed(2)
                        break
                    case "eur":
                        som.value = (inputValue * data.eur).toFixed(2)
                        usd.value = (som.value / data.usd).toFixed(2)
                        tenge.value = (som.value / data.tenge).toFixed(2)
                        break
                    case "tenge":
                        som.value = (inputValue * data.tenge).toFixed(2)
                        usd.value = (som.value / data.usd).toFixed(2)
                        eur.value = (som.value / data.eur).toFixed(2)
                        break
                    default:
                        break
                }
            } else {
                som.value = ''
                usd.value = ''
                eur.value = ''
                tenge.value = ''
            }
        }
    }
}

const validateInput = (element) => {
    element.onkeypress = (event) => {
        const key = event.key
        const isNumber = /^\d+$/.test(key)

        if (!isNumber) {
            event.preventDefault()
        }
    }
}

converter(som, usd, 'som')
converter(usd, som, 'usd')
converter(eur, som, 'eur')
converter(tenge, som, 'tenge')

validateInput(som)
validateInput(usd)
validateInput(eur)
validateInput(tenge)

//cardSwitcher


const card = document.querySelector('.card')
const prevButton = document.getElementById('btn-prev')
const nextButton = document.getElementById('btn-next')

let currentCardIndex = 0
let autoSlideInterval

const loremTexts = [
    'Здравствуйте Нурдин!',
    'Обратите внимание',
    'На то что я добавил еще и валидацию)',
    'Теперь нельзя ввести буквы в конвертор, вы этого не просили, но я все же подумал, почему бы и не добавить её'
]

const generateLorem = () => {
    const currentContent = loremTexts[currentCardIndex]
    currentCardIndex = (currentCardIndex + 1) % loremTexts.length
    return currentContent
}

const updateCard = () => {
    const newContent = document.createElement('p')
    newContent.textContent = generateLorem()
    card.innerHTML = ''
    card.appendChild(newContent)
}

const autoSlide = () => {
    autoSlideInterval = setInterval(() => {
        updateCard()
    }, 2000)
}

prevButton.addEventListener('click', () => {
    clearInterval(autoSlideInterval)
    currentCardIndex = (currentCardIndex - 2 + loremTexts.length) % loremTexts.length
    updateCard()
})

nextButton.addEventListener('click', () => {
    clearInterval(autoSlideInterval)
    updateCard()
})

updateCard()
autoSlide()




