const cardsContainer = document.querySelector('.cards')

async function fetchData(url) {
    try {
        const response = await fetch(url)
        const data = await response.json()
        return data
    } catch (error) {
        console.error('Ошибка получения данных:', error)
    }
}

function createCard(title, description) {
    const card = document.createElement('div')
    card.classList.add('card')

    const cardImage = document.createElement('img')
    cardImage.src = '../image/bg.jpeg'

    const cardTitle = document.createElement('h3')
    cardTitle.textContent = title

    const cardDescription = document.createElement('p')
    cardDescription.textContent = description

    card.appendChild(cardImage)
    card.appendChild(cardTitle)
    card.appendChild(cardDescription)

    return card
}

async function renderCards() {
    const apiUrl = 'https://jsonplaceholder.typicode.com/posts'
    const postsData = await fetchData(apiUrl)

    if (postsData) {
        postsData.forEach(post => {
            const newCard = createCard(post.title, post.body)
            cardsContainer.appendChild(newCard)
        })
    }
}

renderCards()

let prevScrollPos = window.pageYOffset
let isScrollingUp = false

window.addEventListener('scroll', function() {
    let currentScrollPos = window.pageYOffset

    if (prevScrollPos > currentScrollPos) {
        isScrollingUp = true
    } else {
        isScrollingUp = false
    }

    if (isScrollingUp || currentScrollPos === 0) {
        document.querySelector('.header').style.top = '0'
    } else {
        document.querySelector('.header').style.top = '-100px'
    }

    prevScrollPos = currentScrollPos
})
