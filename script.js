const instructions = function(){
    confirm('RULES:You must make a match if the two cards turned picture-side-up are identical. When a match is made the cards will be displaced from the game board. If the two cards turned over are not identical YOU LOSE, after pressing OK you will have 5 seconds to memorize the cards.')

}

instructions()

const cards = document.querySelectorAll('.cards')
console.log(cards)

// console.log(cards)
// const flip = function(){
//     console.log("flipped")
// }

const cardFlip = function(){
    cards.forEach(function(card){
        console.log("flipped")
        card.style.backgroundColor = 'red'
        card.innerText = ''
    })
}

console.log(cardFlip)

setTimeout(cardFlip, 5000)


cards.forEach(function(card){
    const gameboard = [
        card.value, card.value, card.value,
        card.value, card.value, card.value
    ]
})