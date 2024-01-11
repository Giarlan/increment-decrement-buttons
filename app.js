const subtract = document.querySelector('.minus')
const add = document.querySelector('.plus')
const button = document.querySelector('.reset')
const result = document.querySelector('.value')

let i = '0'
result.innerHTML = `${i}`

subtract.addEventListener('click', () => {
    i--
    result.innerHTML = i
})

add.addEventListener('click', () => {
    i++
    i = (i < 10) ? '0' + i : i
    result.innerHTML = i
})

button.addEventListener('click', () => {
    location.reload()
})