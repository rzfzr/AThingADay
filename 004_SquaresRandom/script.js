/// <reference path="../libraries/p5.global-mode.d.ts" />

function setup() {
    createCanvas(400, 400);
}

function drawSquare(n) {
    translate(width / 2, height / 2);
    rotate(n)
    rect(0, 0, width / 4, height / 4);
}

function draw() {
    background(50);
    noFill()
    stroke(255)
    for (let i = 0; i < 1000; i++) {
        drawSquare(i)
    }
}