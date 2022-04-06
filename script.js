function createHandler(carName) {
    const handler = () => {
        console.log(carName + ' car')
    }
    return handler
}

const firstCar = document.getElementById('first-car')
const secondCar = document.querySelector('#second-car')
const thirdCar = document.querySelector('#third-car')

firstCar.onclick = createHandler('First')
secondCar.onclick = createHandler('Second')
// secondCar.onclick = createHandler('Second')

secondCar.addEventListener('click', () => {
    console.log('Second car')
})
secondCar.addEventListener('click', () => {
    console.log('Second car')
})

// thirdCar.addEventListener('click', function () {
//     console.log('Third car')
// })