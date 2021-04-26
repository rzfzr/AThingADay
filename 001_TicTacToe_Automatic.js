/// <reference path="./libraries/p5.global-mode.d.ts" />
// on mousePressed play random move
// very loosly inspirated by https://www.youtube.com/watch?v=GTWrWM1UsnA
// done a day after seeing it, from zero, some aspects are better, some are not

let board = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']
let nextPlayer = false
let winningPositions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

let winningPosition = []

let isGameOver = false

function setup() {
    createCanvas(400, 400)
}


function draw() {
    background(230)
    noFill()
    strokeWeight(3)
    let third = width / 3
    line(third, 0, third, height)
    line(third * 2, 0, third * 2, height)
    line(0, third, width, third)
    line(0, third * 2, width, third * 2)

    if (winningPosition.length > 0)
        drawWon(winningPosition)

    board.forEach((slot, index) => {
        let col = index % 3 * third
        let row = parseInt(index / 3) * third
        if (slot == 'o') {
            ellipse(third / 2 + col, third / 2 + row, 100)
        } else if (slot == 'x') {
            line(third / 2 - 50 + col, third / 2 - 50 + row, third / 2 + 50 + col, third / 2 + 50 + row)
            line(third / 2 + 50 + col, third / 2 - 50 + row, third / 2 - 50 + col, third / 2 + 50 + row)
        }
    })
}

function drawWon(pos) {
    createP('pos: ' + pos)
    let third = width / 3

    let start = [pos[0] % 3, parseInt(pos[0] / 3)]
    let end = [pos[2] % 3, parseInt(pos[2] / 3)]

    createP('start: ' + start + ' end: ' + end)
    rect(start[0] + third / 3, (start[1] * third) + third / 3, abs(start[0] - end[0]) * third + 50, abs(start[1] - end[1]) * third + 50)
}

function checkWin() {
    winningPositions.forEach((pos) => {
        let boardAtPos = board[pos[0]] + board[pos[1]] + board[pos[2]]
        if (boardAtPos == 'xxx' || boardAtPos == 'ooo') {
            createP(board[pos[0]] + ' Wins the game!' + pos)
            isGameOver = true
            winningPosition = pos
            return
        }
    })
    if (!isGameOver && board.find(x => x == ' ') == undefined) {
        createP('Tie')
        isGameOver = true
    }
}

function play() {
    let value
    let position
    if (nextPlayer = !nextPlayer) {
        value = 'x'
    } else {
        value = 'o'
    }
    do {
        position = parseInt(random(0, board.length))
    } while (board[position] != ' ');
    board[position] = value
    checkWin()
}

function mousePressed() {
    if (!isGameOver) {
        play()
    } else {
        board = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']
        isGameOver = false
        winningPosition = []
    }
}