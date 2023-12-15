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

const tabContentBlocks = document.querySelectorAll('.tab_content_block');
const tabs = document.querySelectorAll('.tab_content_item');
const tabsParent = document.querySelector('.tab_content_items');
let slideIndex = 0;
let intervalId;

const hideTabContent = () => {
    tabContentBlocks.forEach((tabCard) => {
        tabCard.style.display = "none";
    });
    tabs.forEach((tab) => {
        tab.classList.remove('tab_content_item_active');
    });
};

const showTabContent = (tabIndex = 0) => {
    hideTabContent();
    tabContentBlocks[tabIndex].style.display = "block";
    tabs[tabIndex].classList.add('tab_content_item_active');
};

const startSlider = () => {
    intervalId = setInterval(() => {
        slideIndex = (slideIndex + 1) % tabs.length;
        showTabContent(slideIndex);
    }, 3000);
};

const stopSlider = () => {
    clearInterval(intervalId);
};

tabs.forEach((tab, tabIndex) => {
    tab.addEventListener('click', () => {
        slideIndex = tabIndex;
        showTabContent(slideIndex);
        stopSlider();
    });
});

tabsParent.addEventListener('mouseenter', stopSlider);
tabsParent.addEventListener('mouseleave', startSlider);

hideTabContent();
showTabContent(slideIndex);
startSlider();


