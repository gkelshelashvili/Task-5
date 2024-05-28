const deleteBtn = document.getElementById('my_btn')
const myDiv = document.getElementById('my_div')

deleteBtn.addEventListener('click', (e) => {
    myDiv.style.display = 'none'
})

const card_div = document.createElement('div')
const h2 = document.createElement('h2')
const a_card = document.createElement('a')
