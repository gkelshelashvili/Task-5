const deleteBtn = document.getElementById('my_btn')
const myDiv = document.getElementById('my_div')

deleteBtn.addEventListener('click', (e) => {
    myDiv.style.display = 'none'
})


//card
const card_div = document.createElement('div')
const h2 = document.createElement('h2')
const h2Txt = document.createTextNode('Gandalf')
const aTxt = document.createTextNode('Go to profile')
const a_card = document.createElement('a')

h2.appendChild(h2Txt)
a_card.appendChild(aTxt)
card_div.appendChild(h2)
card_div.appendChild(a_card)
card_div.setAttribute('id', 'card')
a_card.setAttribute('href', '#')
document.body.appendChild(card_div)
//end

//quiz
const skip = document.getElementById('skip')
const score = document.getElementById('score')
const totalScore = document.getElementById('totalScore')
const countDown = document.getElementById('countdown')
const qa_set = document.querySelectorAll('.qa_set')
const qa_ans_row = document.querySelectorAll('.qa_set .qa_ans_row input')
let count = 0
let scoreCount = 0
let duration = 0

skip.addEventListener('click', () => {
    step()
})

qa_ans_row.forEach(function (qa_ans_row_single){
    qa_ans_row_single.addEventListener('click', function(){
        setTimeout(function() {
            step()
        },500)

        const valid = this.getAttribute('valid')
        if(valid == 'valid') {
            scoreCount += 1
            score.innerHTML = scoreCount
            totalScore.innerHTML = scoreCount
        }else {
            scoreCount -= 0
            score.innerHTML = scoreCount
            totalScore.innerHTML = scoreCount
        }
    })
})

function step() {
    count += 1
    for(let i = 0; i < qa_set.length; i++) {
        qa_set[i].className = 'qa_set'
    }
    qa_set[count].className = 'qa_set active'
    if( count == 5) {
        skip.style.display = 'none'
    }
}

const durationTime = setInterval(function() {

})