const instructions = function(){
    confirm('RULES:You must make a match if the two cards turned picture-side-up are identical. When a match is made the cards will be displaced from the game board. If the two cards turned over are not identical YOU LOSE, after pressing OK you will have 5 seconds to memorize the cards.')
}
instructions()


// reveals cards to you after OK for 5 seconds
const backImgs = document.querySelectorAll('img.back')

backImgs.forEach(function(backImg){
    document.addEventListener('DOMContentLoaded',function(){
            backImg.style.display = 'none'
            setTimeout(function(){
                backImg.style.display = 'block'
            }, 5000)
    })

})

// when player clicks a card it reveals the clicked card 

let isFlipped = false
let firstCard 
let secondCard



const flipBackImg =  function(){
    console.log('clicked')
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
            alert('GAMEOVER')
        }
    }

}




const cardsImgs = document.querySelectorAll('img.back')
cardsImgs.forEach(function(backImg){
    backImg.addEventListener('click', flipBackImg)
})
// setting up start button
// setting up my modals for instructions and GAMEOVER sequence

const startBtn = document.querySelector('#startBtn')
const instructionBtn = document.querySelector('#instructionBtn') 
const instructionModal = document.querySelector('#instructionModal')

