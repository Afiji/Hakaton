// // Получаем все элементы аккордеона
// const accordionItems = document.querySelectorAll('.accordion-item');

// // Добавляем обработчик события клика на каждый элемент аккордеона
// accordionItems.forEach(item => {
//     const header = item.querySelector('.accordion-header');
//     const content = item.querySelector('.accordion-content');

//     header.addEventListener('click', () => {
//         // Переключаем активный элемент аккордеона
//         accordionItems.forEach(accItem => {
//             if (accItem !== item) {
//                 accItem.querySelector('.accordion-header').classList.remove('active');
//                 accItem.querySelector('.accordion-content').classList.remove('active');
//             }
//         });

//         // Переключаем классы для текущего элемента аккордеона
//         header.classList.toggle('active');
//         content.classList.toggle('active');

//         if (header.classList.contains('active')) {
//             icon.src = 'minus.png';
//         } else {
//             icon.src = 'plus.png';
//         }
//     });
// });


// Получаем все элементы аккордеона
const accordionItems = document.querySelectorAll('.accordion-item');

// Добавляем обработчик события клика на каждый элемент аккордеона
accordionItems.forEach(item => {
    const header = item.querySelector('.accordion-header');
    const content = item.querySelector('.accordion-content');
    const icon = item.querySelector('.accordion-icon');

    header.addEventListener('click', () => {
        // Переключаем активный элемент аккордеона
        accordionItems.forEach(accItem => {
            if (accItem !== item) {
                accItem.querySelector('.accordion-header').classList.remove('active');
                accItem.querySelector('.accordion-content').classList.remove('active');
                accItem.querySelector('.accordion-icon').src = './Plus.svg'; // Изменяем на "плюс"
            }
        });

        // Переключаем классы для текущего элемента аккордеона
        header.classList.toggle('active');
        content.classList.toggle('active');

        // Изменяем иконку на "плюс" или "минус"
        if (header.classList.contains('active')) {
            icon.src = './minus.svg';
        } else {
            icon.src = './Plus.svg';
        }
    });
});

