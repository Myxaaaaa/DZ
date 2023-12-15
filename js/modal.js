const modal = document.querySelector('.modal')
const modalTrigger = document.querySelector('#btn-get')
const closeModalButton = document.querySelector('.modal_close')
let isModalOpened = false

const openModal = () => {
    modal.style.display = "block"
    isModalOpened = true

    window.removeEventListener('scroll', handleScroll)
}

const closeModal = () => {
    modal.classList.add('fadeOut')

    setTimeout(() => {
        modal.style.display = "none"
        modal.classList.remove('fadeOut')
    }, 300)
}

const handleScroll = () => {
    if (!isModalOpened && (window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        openModal()
    }
}

const showModalAfterDelay = () => {
    setTimeout(() => {
        openModal()
    }, 10000)
}

modalTrigger.addEventListener('click', () => {
    openModal()
    window.removeEventListener('scroll', handleScroll)
})

closeModalButton.addEventListener('click', () => {
    closeModal()
    isModalOpened = false
})

window.addEventListener('scroll', handleScroll)

showModalAfterDelay()
