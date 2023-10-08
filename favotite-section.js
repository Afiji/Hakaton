const data =  [
    {
        name: 'Chicken Hell',
        img: './favorite-section/food24-removebg-preview.png',
        time: '24 min',
        rating: 4.8,
        price: '$12.99',
        category: 'Healthy'
    },
    {
        name: 'Swe Dish',
        img: './favorite-section/Food3-removebg-preview.png',
        time: '34 min',
        rating: 4.9,
        price: '$19.99',
        category: 'Trending'
    },
    {
        name: 'Swe Dish',
        img: './favorite-section/Food_Image__1_-removebg-preview.png',
        time: '34 min',
        rating: 4.9,
        price: '$19.99',
        category: 'Supreme'
    },
    {
        name: 'Chicken Hell',
        img: './favorite-section/food24-removebg-preview.png',
        time: '24 min',
        rating: 4.8,
        price: '$12.99',
        category: 'Healthy'
    },
    {
        name: 'Chicken Hell',
        img: './favorite-section/Food3-removebg-preview.png',
        time: '24 min',
        rating: 4.8,
        price: '$12.99',
        category: 'Healthy'
    },
    {
        name: 'Swe Dish',
        img: './favorite-section/Food_Image__1_-removebg-preview.png',
        time: '34 min',
        rating: 4.9,
        price: '$19.99',
        category: 'Supreme'
    },
]

const miniBlocks = document.querySelector('.container__for__miniBlocks')
const main__block = document.querySelector('.main__block')

data.forEach(el => {
    const box = document.createElement('div')
    const img = document.createElement('img')

    box.className = 'box'
    img.className = 'img'
    img.src = el.img


    img.addEventListener('click', () => {
        main__block.innerHTML = ''

        const boxMain = document.createElement('div')
        const clonedImage = document.createElement('img')
        const name = document.createElement('p')
        const time = document.createElement('p')
        const rating = document.createElement('p')
        const price = document.createElement('p')
        const category = document.createElement('p')


        name.className = 'name'
        time.className = 'time'
        rating.className = 'rating'
        price.className = 'price'
        category.className = 'category'
        clonedImage.className = 'clonedImage'
        boxMain.className = 'boxMain'

        name.textContent = el.name
        time.textContent = el.time
        category.textContent = el.category
        rating.textContent = el.rating
        price.textContent = el.price

        clonedImage.src = el.img

        boxMain.append(clonedImage, name, category, time, rating, price)
        main__block.append(boxMain)
    })

    box.append(img)
    miniBlocks.append(box)
})