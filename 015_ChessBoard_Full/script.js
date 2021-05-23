/// <reference path="../libraries/p5.global-mode.d.ts" />
var a = 0
let dir = false
let queens = [{
    x: 1,
    y: 1
}]
let target = {
    x: 1,
    y: 1
}

function draw() {
    createCanvas(800, 800);
    board()
    stroke(200)
    fill(50)
    drawRook(0, 0)
    drawKnight(1, 0)
    drawBishop(2, 0)
    drawQueen(3, 0)
    drawKing(4, 0)
    drawBishop(5, 0)
    drawKnight(6, 0)
    drawRook(7, 0)

    drawPawn(0, 1)
    drawPawn(1, 1)
    drawPawn(2, 1)
    drawPawn(3, 1)
    drawPawn(4, 1)
    drawPawn(5, 1)
    drawPawn(6, 1)
    drawPawn(7, 1)


    stroke(50)
    fill(250)


    drawRook(0, 7)
    drawKnight(1, 7)
    drawBishop(2, 7)
    drawQueen(3, 7)
    drawKing(4, 7)
    drawBishop(5, 7)
    drawKnight(6, 7)
    drawRook(7, 7)

    drawPawn(0, 6)
    drawPawn(1, 6)
    drawPawn(2, 6)
    drawPawn(3, 6)
    drawPawn(4, 6)
    drawPawn(5, 6)
    drawPawn(6, 6)
    drawPawn(7, 6)

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
    triangle(x * 100 + 30, y * 100 + 20, x * 100 + 10, y * 100 + 90, x * 100 + 90, y * 100 + 90);
    triangle(x * 100 + 70, y * 100 + 20, x * 100 + 10, y * 100 + 90, x * 100 + 90, y * 100 + 90);
    triangle(x * 100 + 10, y * 100 + 30, x * 100 + 10, y * 100 + 90, x * 100 + 90, y * 100 + 90);
    triangle(x * 100 + 90, y * 100 + 30, x * 100 + 10, y * 100 + 90, x * 100 + 90, y * 100 + 90);
}

function drawKnight(x, y) {
    triangle(x * 100 + 70, y * 100 + 10, x * 100 + 10, y * 100 + 90, x * 100 + 20, y * 100 + 10);
    triangle(x * 100 + 20, y * 100 + 10, x * 100 + 10, y * 100 + 90, x * 100 + 70, y * 100 + 90);
}

function drawRook(x, y) {
    triangle(
        x * 100 + 20, y * 100 + 10,
        x * 100 + 50, y * 100 + 90,
        x * 100 + 80, y * 100 + 10);
    triangle(
        x * 100 + 20, y * 100 + 90,
        x * 100 + 50, y * 100 + 10,
        x * 100 + 80, y * 100 + 90);
}

function drawKing(x, y) {
    triangle(x * 100 + 50, y * 100 + 30, x * 100 + 10, y * 100 + 90, x * 100 + 90, y * 100 + 90);
    triangle(x * 100 + 50, y * 100 + 10, x * 100 + 40, y * 100 + 30, x * 100 + 60, y * 100 + 30);
    triangle(x * 100 + 90, y * 100 + 10, x * 100 + 10, y * 100 + 90, x * 100 + 90, y * 100 + 90);
    triangle(x * 100 + 10, y * 100 + 10, x * 100 + 10, y * 100 + 90, x * 100 + 90, y * 100 + 90);
}

function drawPawn(x, y) {
    triangle(
        x * 100 + 50, y * 100 + 40,
        x * 100 + 10, y * 100 + 90,
        x * 100 + 90, y * 100 + 90);
    triangle(
        x * 100 + 50, y * 100 + 40,
        x * 100 + 30, y * 100 + 90,
        x * 100 + 70, y * 100 + 90);
}

function drawBishop(x, y) {
    triangle(
        x * 100 + 50, y * 100 + 10,
        x * 100 + 30, y * 100 + 90,
        x * 100 + 70, y * 100 + 90);
    triangle(
        x * 100 + 50, y * 100 + 10,
        x * 100 + 45, y * 100 + 90,
        x * 100 + 55, y * 100 + 90);
}