
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
            }, 2000)
    })

})


// setting up start button
// setting up my modals for instructions and GAMEOVER sequence

const instructionBtn = document.querySelector('#instructionBtn') 
const modal = document.querySelector('#myModal')
const spanClose = document.querySelector('.close')
const gameOverModal = document.querySelector('#overModal')
const restartBtn = document.querySelector('#restart')
const nextLevelModal = document.querySelector('#nxtLvl')
const nextLevelBtn = document.querySelector('#nextBtn')

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
            nextLevelModal.style.display = 'block'
        }
    }

}


// This radomizes the order in which the cards appear.
// https://javascript.tutorialink.com/javascript-shuffle-html-list-element-order/
const gameBoard = document.querySelector('.gameboard')
for (let i = gameBoard.childElementCount; i >= 0; i--){
    gameBoard.appendChild(gameBoard.children[Math.random() * i | 0])
}



// this will add append new cards to the game and cover the cards again so that the sequence starts over again
nextLevelBtn.onclick = function(){
    nextLevelModal.style.display = 'none'
    backImgs.forEach(function(backImg){
                cardsImgs.forEach(function(backImg){
                    backImg.addEventListener('click', flipBackImg)
                backImg.style.display = 'none'
                setTimeout(function(){
                    backImg.style.display = 'block'
                }, .1)

        
        })
    })
    for(let i = 0; i <= 2; i++ ){
        const newDiv = document.createElement('div')
        newDiv.classList.add("cards")
        const divBackImg = document.createElement('img')
        divBackImg.src = 'images/BWbacknew.png'
        divBackImg.classList.add('back')
        newDiv.appendChild(divBackImg)
        gameBoard.appendChild(newDiv)
    }
    gameBoard.id = "levelTwoGameBoard"
    const divCard = document.querySelectorAll('div.cards')
    divCard.id = 'cardsLevelTwo'
    backImgs.forEach(function(backImg){
        startBtn.addEventListener('click',function(){
                cardsImgs.forEach(function(backImg){
                    backImg.addEventListener('click', flipBackImg)
                })
                backImg.style.display = 'none'
                setTimeout(function(){
                    backImg.style.display = 'block'
                }, 4000)
        })
    
    })


}
