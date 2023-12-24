const modal = document.querySelector('.modal')
const modalTrigger = document.querySelector('#btn-get')
const closeModalButton = document.querySelector('.modal_close')
let isModalOpened = false

const openModal = () => {
    modal.style.display = 'block'
    document.body.style.overflow = 'hidden'
    isModalOpened = true
}

const closeModal = () => {
    modal.style.display = 'none'
    document.body.style.overflow = ''
}

modalTrigger.onclick = () => {
    openModal()
    window.removeEventListener('scroll', handleScroll)
}

closeModalButton.onclick = () => {
    closeModal()
    isModalOpened = false
}

modal.onclick = (event) => {
    if (event.target === modal) {
        closeModal()
    }

    setTimeout(() => {
        modal.style.display = 'none'
        modal.classList.remove('fadeOut')
    }, 300)
}

const handleScroll = () => {
    if (!isModalOpened && (window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        openModal()
        window.removeEventListener('scroll', handleScroll)
    }
}

const showModalAfterDelay = () => {
    setTimeout(() => {
        openModal()
        window.removeEventListener('scroll', handleScroll)
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
