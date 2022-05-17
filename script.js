
const backImgs = document.querySelectorAll('img.back')

const startBtn = document.querySelector('#startBtn')

const cardsImgs = document.querySelectorAll('img.back')


backImgs.forEach(function(backImg){
    startBtn.addEventListener('click',function(){
            cardsImgs.forEach(function(backImg){
                backImg.addEventListener('click', flipBackImg)
            })
            backImg.style.display = 'none'
            setTimeout(function(){
                backImg.style.display = 'block'
            }, 5000)
    })

})


// setting up start button
// setting up my modals for instructions and GAMEOVER sequence

const instructionBtn = document.querySelector('#instructionBtn') 
const modal = document.querySelector('#myModal')
const spanClose = document.querySelector('.close')
const gameOverModal = document.querySelector('#overModal')
const restartBtn = document.querySelector('#restart')

instructionBtn.onclick = function(){
    modal.style.display = 'block'
}

spanClose.onclick = function(){
    modal.style.display = 'none'
}

restartBtn.onclick = function(){
    window.location.reload()
}
// when player clicks a card it reveals the clicked card 

let isFlipped = false
let firstCard 
let secondCard
let clicks = 0

const flipBackImg =  function(){
    clicks ++
    console.log(clicks)
    this.style.display = 'none'
    if(!isFlipped){
        isFlipped = true
        firstCard = this
        console.log(firstCard.dataset.card)
    }else{
        isFlipped = false 
        secondCard = this 
        console.log(secondCard.dataset.card)
        if(firstCard.dataset.card !== secondCard.dataset.card){
            // alert('GAMEOVER')
            gameOverModal.style.display = 'block'
        } else if(clicks >= 6){
            console.log('YOU WIN')
        }
    }

}

