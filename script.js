const instructions = function(){
    confirm('RULES:You must make a match if the two cards turned picture-side-up are identical. When a match is made the cards will be displaced from the game board. If the two cards turned over are not identical YOU LOSE, after pressing OK you will have 5 seconds to memorize the cards.')

}

instructions()

const cards = document.querySelectorAll('.cards')

const cardFlip = function(){
    cards.forEach(function(card){
        console.log("flipped")
        card.style.backgroundColor = 'red'
        card.style.color = 'red'
    })
}

console.log(cardFlip)

setTimeout(cardFlip, 5000)





const gameboard = [
]


cards.forEach(function(card){


    card.addEventListener('click', function(){
        card.value = card.innerText
        card.style.background = 'white'
        gameboard.push(card.value)
        console.log(gameboard)
        
        if(gameboard[0]=== gameboard[1]){
            setInterval(function(){
                card.remove()
            },2000)
        }

        // else if(gameboard[0] !== gameboard[1]){
        //     gameboard.pop()
        //     gameboard.pop()
            
        // }

    })
})

console.log(gameboard)