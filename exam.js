const btn1 = document.querySelector('.color-button1')
const btn2 = document.querySelector('.color-button2')
const btn3 = document.querySelector('.color-button3')
const btn4 = document.querySelector('.color-button4')

btn1.addEventListener('click', () => {
  document.body.style.background = "red"
})
btn2.addEventListener('click', () => {
  document.body.style.background = "blue"
})
btn3.addEventListener('click', () => {
  document.body.style.background = "green"
})
btn4.addEventListener('click', () => {
  document.body.style.background = "yellow"
})