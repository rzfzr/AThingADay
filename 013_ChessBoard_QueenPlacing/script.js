/// <reference path="../libraries/p5.global-mode.d.ts" />
var a = 0
let dir = false
let queens = []

function draw() {
    createCanvas(400, 400);
    board()
    frameRate(10)

    queens.forEach(queen => {
        drawQueen(queen.x, queen.y)

    })

}

function mousePressed() {
    let x = Math.floor(mouseX / 100)
    let y = Math.floor(mouseY / 100)
    queens.push({
        x,
        y
    })
}

function board() {
    for (let x = 0; x < width / 100; x++) {
        for (let y = 0; y < height / 100; y++) {
            fill((x % 2 == y % 2) ? 255 : 40)
            rect(x * 100, y * 100, 100, 100)
        }
    }
}

function drawQueen(x, y) {
    triangle(x * 100 + 50, y * 100 + 10, x * 100 + 10, y * 100 + 90, x * 100 + 90, y * 100 + 90);
    triangle(x * 100 + 80, y * 100 + 10, x * 100 + 10, y * 100 + 90, x * 100 + 90, y * 100 + 90);
    triangle(x * 100 + 20, y * 100 + 10, x * 100 + 10, y * 100 + 90, x * 100 + 90, y * 100 + 90);
}