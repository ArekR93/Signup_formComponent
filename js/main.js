document.addEventListener('DOMContentLoaded', function(){
    const firstName = document.querySelector('.first-name');
    const lastName = document.querySelector('.last-name');
    const mail = document.querySelector('.mail');
    const password = document.querySelector('.password');
    const errorIcons = document.querySelectorAll('.icon-error');
    const errorTexts = document.querySelectorAll('.text-error')
    const inputBtn = document.querySelector('.claim-btn')


    const isValidateEmail = () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (emailRegex.test(mail.value) && (firstName.value != '') &&(lastName.value !='' && (password.value != ''))){
            errorIcons.forEach((element) => element.classList.remove('active'))
            errorTexts.forEach((element) => element.classList.remove('active'))
 
        }else{
            errorIcons.forEach((element) => element.classList.add('active'))
            errorTexts.forEach((element) => element.classList.add('active'))
        }

    }
    inputBtn.addEventListener('click', isValidateEmail)
})