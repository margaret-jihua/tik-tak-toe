// Logic Reference: https://github.com/angle943/tic-tac-toe
// have bugs when meet condition 2=5=8, 3=6=9, 4=5=6, 7=8=9
// add if(one) etc. to check if it is empty ''

// Variables

msg = document.querySelector('#message h2')
let moves = 0
let next = ''
let gameIsGoing = true


// Functions

// display winner
function display(player) {
    if (player === 'X'){
        msg.textContent = 'X Wins!!!'
        gameIsGoing = !gameIsGoing

    }
    else if (player === 'O') {
        msg.textContent = 'O Wins!!!'
        gameIsGoing = !gameIsGoing

    }
    // some boxs have '', which also meet the if statement, took time to figure out...
    // else {
    //     msg.textContent = next + ' is next'
    // }
}

// check winning cases
function gameStatus(){
    //.textContent work just the same like .classList[1], since I name the additional class 'X' or 'O'
    one = document.querySelector('#one').classList[1]
    two = document.querySelector('#two').classList[1]
    three = document.querySelector('#three').classList[1]
    four = document.querySelector('#four').classList[1]
    five = document.querySelector('#five').classList[1]
    six = document.querySelector('#six').classList[1]
    seven = document.querySelector('#seven').classList[1]
    eight = document.querySelector('#eight').classList[1]
    nine = document.querySelector('#nine').classList[1]

    if (one && one === two && one === three) {display(one)}
    else if (four && four === five && four === six) {display(four)}
    else if (seven && seven === eight && seven === nine) {display(seven)}
    else if (one && one === four && one === seven) {display(one)}
    else if (two && two === five && two === eight) {display(two)}
    else if (three && three === six && three === nine) {display(three)}
    else if (one && one === five && one === nine) {display(one)}
    else if (three && three === five && three === seven) {display(three)}
    else if (moves === 9){
        gameIsGoing = !gameIsGoing
        msg.textContent = 'Tie!!!'
    }
    else{
        msg.textContent = next + ' is next'
    }
}


// Excutions

document.addEventListener('DOMContentLoaded', function(){

   
    // click any box to display X or O and check game status 

    boxs = document.querySelectorAll('.box')
    boxs.forEach(item => {
        item.addEventListener('click', function(){
            if (item.textContent !== '' || !gameIsGoing){
                return
            }
            else if (moves %2 === 0){
                item.textContent = 'X'
                item.classList.add('X')
                next = 'O'
            }
            else{
                item.textContent = 'O'
                item.setAttribute('class', 'box O')
                next = 'X'
            }
            moves ++
            gameStatus();                
        })
    })


    //reset button

    document.getElementById("reset").onclick = function() {
        msg.textContent = 'Let\'s Play'
        moves = 0
        next = ''
        gameIsGoing = true
        boxs.forEach(item => {
            item.textContent = ''
            item.setAttribute('class', 'box')
        })
    }

})

 