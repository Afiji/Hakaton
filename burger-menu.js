// const burgerMenu = document.querySelector('.burger-menu');
// const backdrop = document.querySelector('.backdrop');
// const menu = document.querySelector('.menu');

// burgerMenu.addEventListener('click', () => {
//     burgerMenu.classList.toggle('open')
//     backdrop.classList.toggle('active')
//     menu.classList.toggle('active')
// })


// document.querySelector('.burger-close').addEventListener('click', () => {
//     burgerMenu.classList.remove('open')
//     backdrop.classList.remove('active')
//     menu.classList.remove('active')
// })



const burgerMenu = document.querySelector('.burger-menu')
const backdrop = document.querySelector('.backdrop')
const menu = document.querySelector('.menu')

burgerMenu.addEventListener('click', () => {
    burgerMenu.classList.toggle('open')
    backdrop.classList.toggle('active')
    menu.classList.toggle('active')
    
    const burgerClose = document.querySelector('.burger-close');
    burgerClose.classList.toggle('visible') // Показываем/скрываем крестик
})

// Добавляем обработчик события для закрытия меню при клике на крестик
document.querySelector('.burger-close').addEventListener('click', () => {
    burgerMenu.classList.remove('open')
    backdrop.classList.remove('active')
    menu.classList.remove('active')
    
    const burgerClose = document.querySelector('.burger-close');
    burgerClose.classList.remove('visible') // Скрываем крестик
})
