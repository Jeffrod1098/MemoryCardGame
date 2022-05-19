
const backImgs = document.querySelectorAll('img.back')

const startBtn = document.querySelector('#startBtn')

// const cardsImgs = document.querySelectorAll('img.back')

let startBtnClick = 0

const startBtnFunc = function(){
    if(startBtnClick === 0){
        backImgs.forEach(function(backImg){
                    backImgs.forEach(function(backImg){
                        backImg.addEventListener('click', flipBackImg)
                    })
                    backImg.style.display = 'none'
                    setTimeout(function(){
                        backImg.style.display = 'block'
                    }, 4000)
    

    })
    }
    startBtnClick ++
    startBtn.removeEventListener('click', startBtnFunc)
}

    startBtn.addEventListener('click', startBtnFunc)




// setting up start button
// setting up my modals for instructions and GAMEOVER sequence

const instructionBtn = document.querySelector('#instructionBtn') 
const modal = document.querySelector('#myModal')
const spanClose = document.querySelector('.close')
const gameOverModal = document.querySelector('#overModal')
const restartBtn = document.querySelector('#restart')
const nextLevelModal = document.querySelector('#nxtLvl')
const nextLevelBtn = document.querySelector('#nextBtn')
const endModal = document.querySelector('#endgame')
const endBtn = document.querySelector('#congrats')

instructionBtn.onclick = function(){
    modal.style.display = 'block'
}

spanClose.onclick = function(){
    modal.style.display = 'none'
}

restartBtn.onclick = function(){
    window.location.reload()
}

endBtn.onclick = function(){
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
            gameOverModal.style.display = 'block'
        } else if(clicks === 6){
            console.log('YOU WIN')
            nextLevelModal.style.display = 'block'
        } else if(clicks === -1){
                endModal.style.display = 'block'
        }
    }

}


// This radomizes the order in which the cards appear.
const gameBoard = document.querySelector('.gameboard')
for (let i = gameBoard.childElementCount; i >= 0; i--){
    gameBoard.appendChild(gameBoard.children[Math.random() * i | 0])
}



// this will add append new cards to the game and cover the cards again so that the sequence starts over again
nextLevelBtn.onclick = function(){
    startBtnClick = 0
    clicks = -9 
    nextLevelModal.style.display = 'none'
    for(let i = 0; i <= 1; i++ ){
        const newDiv = document.createElement('div')
        newDiv.classList.add("cards")
        const divBackImg = document.createElement('img')
        divBackImg.src = 'images/BWbacknew.png'
        const divFrontImg = document.createElement('img')
        divFrontImg.src = 'images/BW7.png' 
        divFrontImg.classList.add('front')
        divBackImg.classList.add('back')
        divBackImg.dataset.card= '7'
        newDiv.appendChild(divFrontImg)
        newDiv.appendChild(divBackImg)
        gameBoard.appendChild(newDiv)
        divBackImg.style.display = 'block'
    }
    const newDiv = document.createElement('div')
    newDiv.classList.add("cards")
    const divBackImg = document.createElement('img')
    divBackImg.src = 'images/BWbacknew.png'
    const divFrontImg = document.createElement('img')
    divFrontImg.src = 'images/BWdecoyAce.png' 
    divFrontImg.classList.add('front')
    divBackImg.classList.add('back')
    divBackImg.dataset.card= 'ace'
    newDiv.appendChild(divFrontImg)
    newDiv.appendChild(divBackImg)
    gameBoard.appendChild(newDiv)

    // setTimeout(function(){
    //     divBackImg.style.display = 'block'
    // }, .00001)

    const backImgs = document.querySelectorAll('img.back')
    // const cardsImgs = document.querySelectorAll('img.back')

    // After next level, reselect all divs with queryselector, run startBtnFunc using the same variable but that variable includes the past divs and new divs
    // You can run as many levels as you want.
    // Also at the end of startBtnFunc you want to remove eventclicker from start so that it doesn't duplicate
    // 

    gameBoard.id = "levelTwoGameBoard"
    const divCard = document.querySelectorAll('div.cards')
    divCard.id = 'cardsLevelTwo'
    const btnContainer = document.querySelector('.btnContainer')
    btnContainer.id= 'btnContainerTwo'
    const h1 = document.querySelector('h1')


   backImgs.forEach(function(backImg){
       backImg.removeEventListener('click', flipBackImg)
        // backImg.addEventListener('click', flipBackImg)
        backImg.style.display = 'none'
        setTimeout(function(){
            backImg.style.display = 'block'
        }, .000001)
    })

    function showCards () {
   backImgs.forEach(function(backImg){
        backImg.addEventListener('click', flipBackImg)
   })
        backImgs.forEach(function(backImg){
            backImg.style.display = 'none'
            setTimeout(function(){
                backImg.style.display = 'block'
            }, 4000)
        })
        startBtn.removeEventListener('click', showCards);
        }

    startBtn.addEventListener('click', showCards) 

        const lvlTwoGameBoard = document.querySelector('#levelTwoGameBoard')
        console.log(lvlTwoGameBoard)
        for (let i = lvlTwoGameBoard.childElementCount; i >= 0; i--){
            lvlTwoGameBoard.appendChild(lvlTwoGameBoard.children[Math.random() * i | 0])
        }

}




