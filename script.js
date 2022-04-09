const cardsElem = document.querySelector('.cards')

function createCarElem(car) {
    return `<div class="card">
    <img src="${car.imgSrc}" class="car-img">
    <h4>${car.name}</h4>
    <h5 id="first-car-price">Price: \$${car.price}</h5>
    <button class="btn btn-primary" id="first-car">Buy</button>
  </div>`
}

function initPage(cars = []) {
    cars.forEach((car) => {
        cardsElem.insertAdjacentHTML('beforeend', createCarElem(car))
    })
}

fetch('http://localhost:3000/cars').then((response) => {
    if (response.ok) {
        return response.json()
    }
}).then((cars) => {
    initPage(cars)
})

function renderCart() {    
    const orderPriceElem = document.getElementById('order-price')
    let orderPrice = 0
    for (let index = 0; index < prices.length; index++) {
        const price = prices[index];
        const nums = orderNums[index]
        orderPrice += price * nums
    }
    orderPriceElem.textContent = orderPrice
}



// const prices = [20000, 29990.99, 25000]
// const orderNums = [0, 0, 0]

// const firstCarPrice = document.getElementById('first-car-price')
// firstCarPrice.textContent = `Price: \$${prices[0]}`
// const secondCarPrice = document.getElementById('second-car-price')
// secondCarPrice.textContent = `Price: \$${prices[1]}`
// const thirdCarPrice = document.getElementById('third-car-price')
// thirdCarPrice.textContent = `Price: \$${prices[2]}`

// function renderCart() {
//     const firstCartItem = document.getElementById('first-cart-item')
//     const secondCartItem = document.getElementById('second-cart-item')
//     const thirdCartItem = document.getElementById('third-cart-item')
//     const orderPriceElem = document.getElementById('order-price')
//     firstCartItem.textContent = orderNums[0]
//     secondCartItem.textContent = orderNums[1]
//     thirdCartItem.textContent = orderNums[2]
//     let orderPrice = 0
//     for (let index = 0; index < prices.length; index++) {
//         const price = prices[index];
//         const nums = orderNums[index]
//         orderPrice += price * nums
//     }
//     orderPriceElem.textContent = orderPrice
// }

// function createHandler(carName) {
//     const handler = () => {
//         if (carName === 'First') {
//             orderNums[0]++
//         }
//         if (carName === 'Second') {
//             orderNums[1]++
//         }
//         if (carName === 'Third') {
//             orderNums[2]++
//         }
//         renderCart()
//     }
//     return handler
// }

// const firstCar = document.getElementById('first-car')
// const secondCar = document.querySelector('#second-car')
// const thirdCar = document.querySelector('#third-car')

// firstCar.onclick = createHandler('First')
// secondCar.onclick = createHandler('Second')
// thirdCar.onclick = createHandler('Third')


// firstCar.addEventListener('click', () => {
//     console.log('First car')
// })
// secondCar.addEventListener('click', () => {
//     console.log('Second car')
// })
// thirdCar.addEventListener('click', function () {
//     console.log('Third car')
// })