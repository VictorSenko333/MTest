
import '../styles/styles.scss'
import $ from 'jquery'
import "slick-carousel"

const isMobile = +window.innerWidth <= 414;
$('.carousel').slick({
    slidesToShow: isMobile? 1 : 3,
    slidesToScroll: 1,
})


/* форма и модальное окно---------------------------------------------------*/
const form = document.querySelector('.form')
const formInputs = document.querySelectorAll('.js-input')
const inputEmail = document.querySelector('.js-input-email')
const textarea = document.querySelector('.textarea')
const modalWindow = document.querySelector('.modal-wrapper')

const consultCheck = document.getElementById('consult')
const rateCheck = document.getElementById('rate')
const accessCheck = document.getElementById('access')

const validateEmail = (email) => {
    const rgexp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return rgexp.test(String(email).toLocaleLowerCase())
}

form.onsubmit = () => {
    let emailVal = inputEmail.value
    let submitStatus = true;
    /* validate fields */
    formInputs.forEach((input) => {
        if(input.value === ""){
            input.classList.add('input-error')
            submitStatus = false
        }else{
            input.classList.remove('input-error')
        }
    })
    /* validate textarea */
    if(textarea.value === ""){
        submitStatus= false;
        textarea.classList.add('textarea-error')
    }else{
        textarea.classList.remove('textarea-error')
    }
    /* validate email */
    if(!validateEmail(emailVal)){
        submitStatus = false;
        inputEmail.classList.add('input-error')
    }
    const data = {
        name: Array.from(formInputs).filter(el => el?.name === 'name')[0].value,
        email: emailVal,
        description: textarea.value,
        consulting: consultCheck.checked,
        rate: rateCheck.checked,
        estimation: accessCheck.checked
    }
    console.log('инфо из формы: ',data)

    if(!submitStatus){
        return false
    }else{
        modalWindow.classList.add('modal-show')
    }
    return false
}
modalWindow.addEventListener('click', (e) => {
    if(e.target === modalWindow){
        modalWindow.classList.remove('modal-show')
    }
})

/* кнопочки и контейнеры для прокрутки*/

const aboutBtn = document.querySelector('.about-btn')
const servicesBtn = document.querySelector('.services-btn')
const publicationsBtn = document.querySelector('.publications-btn')
const formBtn = document.querySelector('.form-btn')

const aboutSection = document.querySelector('.screen-2');
const servicesSection = document.querySelector('.screen-3');
const publicationsSection = document.querySelector('.screen-4');
const formSection = document.querySelector('.screen-5');

aboutBtn.addEventListener('click', () => {
    aboutSection.scrollIntoView({ block: "start", behavior: "smooth" });
})
servicesBtn.addEventListener('click', () => {
    servicesSection.scrollIntoView({ block: "start", behavior: "smooth" });
})
publicationsBtn.addEventListener('click', () => {
    publicationsSection.scrollIntoView({ block: "start", behavior: "smooth" });
})
formBtn.addEventListener('click', () => {
    formSection.scrollIntoView({ block: "start", behavior: "smooth" });
})
/* --------------- */