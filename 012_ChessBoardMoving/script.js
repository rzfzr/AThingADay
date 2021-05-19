/// <reference path="../libraries/p5.global-mode.d.ts" />
var a = 0
let dir = false

function draw() {
    createCanvas(800, 800);
    board()
    frameRate(10)



    if (!dir) {
        if (a < 7) a++
        else dir = !dir
    } else {
        if (a > 0) a--
        else dir = !dir
    }

    let c = color(10, 220, 10)
    fill(c)
    drawQueen(a, 0)
    drawQueen(a, 1)
    drawQueen(a, 2)
    drawQueen(a, 3)
    drawQueen(a, 4)
    drawQueen(a, 5)
    drawQueen(a, 6)
    drawQueen(a, 7)
    c = color(10, 100, 220)
    fill(c)
    drawQueen(0, a)
    drawQueen(1, a)
    drawQueen(2, a)
    drawQueen(3, a)
    drawQueen(4, a)
    drawQueen(5, a)
    drawQueen(6, a)
    drawQueen(7, a)


    movimento()
}

function board() {
    for (let x = 0; x < 8; x++) {
        for (let y = 0; y < 8; y++) {
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

function movimento() {
    // translate(400 / 2, 400 / 2);
    // rotate(a);
    // a = a + 0.01;
    // rectMode(CENTER)


}