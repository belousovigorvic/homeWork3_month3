// tabs
const tabs = document.querySelectorAll('.tabheader__item')
const tabContent = document.querySelectorAll('.tabcontent')
const tabsParent = document.querySelector('.tabheader__items')

const hideTabContent = () => {
    tabContent.forEach(item => {
        item.style.display = 'none'
    })
    tabs.forEach(item => {
        item.classList.remove('tabheader__item_active')
    })
}

const showTabContent = (i = 0) => {
    tabContent[i].style.display = 'block'
    tabs[i].classList.add('tabheader__item_active')
}

hideTabContent()
showTabContent()

// Авто-слайдер
let autoSlide = (i = 0) => {
    let timeout
    let interval = setInterval(() => {
        i++
        if (i > tabContent.length - 1) {
            i = 0
        }
        hideTabContent()
        showTabContent(i)
    }, 3000)
    // По клику на таб делаем паузу и возобновляем авто-слайдер через 6 секунд
    tabs.forEach((item, i) => {
        item.onclick = () => {
            clearInterval(interval)
            clearTimeout(timeout)
            timeout = setTimeout(() => {
                autoSlide(i)
            }, 6000)
        }
    })
}
autoSlide()

// Показываем таб по клику
tabsParent.onclick = (event) => {
    if (event.target.classList.contains('tabheader__item')) {
        tabs.forEach((item, i) => {
            if (event.target === item) {
                hideTabContent()
                showTabContent(i)
            }
        })
    }
}

// modal 
const modal = document.querySelector('.modal')
const modalTrigger = document.querySelector('.btn_white')
const closeModalBtn = document.querySelector('.modal__close')

const openModal = () => {
    modal.classList.add('show')
    document.body.style.overflow = 'hidden'
}

const closeModal = () => {
    modal.classList.remove('show')
    document.body.style.overflow = ''
}

// Авто открытие модального окна
const autoOpenModal = () => {
    setTimeout(openModal, 10000)
}
autoOpenModal()

// Скролл-открытие модального окна
const scrollToOpenModal = () => {
    window.addEventListener('scroll', () => {
        if ((document.documentElement.scrollTop + window.innerHeight) >= document.documentElement.scrollHeight) {
            openModal();
        }
    });
};
scrollToOpenModal();

modalTrigger.onclick = () => openModal()
closeModalBtn.onclick = () => closeModal()
modal.onclick = (event) => event.target === modal && closeModal()
