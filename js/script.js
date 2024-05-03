// player-one-dom
let playerOneHeading = document.querySelector('.player-one--heading')
let playerOneError = document.querySelector('.player-one--error')
let playerOneAttemps = document.querySelector('.player-one--attemps')
let playerOne = document.querySelector('.player-one')
let playerOneInput = document.querySelector('.player-one--input')
let playerOneButton = document.querySelector('.player-one--button')


// player-two-dom
let playerTwoHeading = document.querySelector('.player-two--heading')
let playerTwoError = document.querySelector('.player-two--error')
let playerTwoAttemps = document.querySelector('.player-two--attemps')
let playerTwo = document.querySelector('.player-two')
let playerTwoInput = document.querySelector('.player-two--input')
let playerTwoButton = document.querySelector('.player-two--button')

// player-three-dom
let playerThreeHeading = document.querySelector('.player-three--heading')
let playerThreeError = document.querySelector('.player-three--error')
let playerThreeAttemps = document.querySelector('.player-three--attemps')
let playerThree = document.querySelector('.player-three')
let playerThreeInput = document.querySelector('.player-three--input')
let playerThreeButton = document.querySelector('.player-three--button')

// winner-page-dom
let card = document.querySelector('.card')
let winnerHeading = document.querySelector('.winner-heading')
let winnerName = document.querySelector('.winner-name')


// player one 

playerOneButton.addEventListener('click', () => {
    if (playerOneInput.value === '') {
        playerOneError.innerHTML = 'ইনপুট ফাকা রাখা যাবে না'
    } else if (playerOneInput.value > 10) {
        playerOneError.innerHTML = '১০ এর বড় সংখ্যা নেওয়া যাবে না'
    } else {
        playerOneError.innerHTML = ''
        playerOne.style.display = 'none'
        playerTwo.style.display = 'flex'
    }
})


// player two 

let attemptsTwo = 5

playerTwoButton.addEventListener('click', () => {
    if (attemptsTwo <= 1) {
        playerTwo.style.display = 'none'
        playerThree.style.display = 'flex'
        return;
    }
    if (playerTwoInput.value === '') {
        playerTwoError.innerHTML = 'ইনপুট ফাকা রাখা যাবে না'
    } else if (playerTwoInput.value > 10) {
        playerTwoError.innerHTML = '১০ এর বড় সংখ্যা নেওয়া যাবে না'
    } else {
        playerTwoError.innerHTML = ''
        if (playerTwoInput.value === playerOneInput.value) {
            winnerHeading.innerHTML = 'Woo-hoo!'
            winnerName.innerHTML = 'Player Two Win'
            playerTwo.style.display = 'none'
            card.style.display = 'flex'
        } else {
            playerOne.style.display = 'none'
        }
        attemptsTwo--
        playerTwoAttemps.innerHTML = `Attempts: ${attemptsTwo}`
    }
})


// player three

let attemptsThree = 5

playerThreeButton.addEventListener('click', () => {
    if (attemptsThree <= 1) {
        winnerHeading.innerHTML = 'Woo-hoo!'
        winnerName.innerHTML = 'Player One Win'
        playerThree.style.display = 'none'
        card.style.display = 'flex'
        return
    }
    if (playerThreeInput.value === '') {
        playerThreeError.innerHTML = 'ইনপুট ফাকা রাখা যাবে না'
    } else if (playerThreeInput.value > 10) {
        playerThreeError.innerHTML = '১০ এর বড় সংখ্যা নেওয়া যাবে না'
    } else {
        playerThreeError.innerHTML = ''
        if (playerThreeInput.value === playerOneInput.value) {
            winnerHeading.innerHTML = 'Woo-hoo!'
            winnerName.innerHTML = 'Player Three Win'
            playerThree.style.display = 'none'
            card.style.display = 'flex'
        }
        attemptsThree--
        playerThreeAttemps.textContent = `Attempts: ${attemptsThree}`
    }
})