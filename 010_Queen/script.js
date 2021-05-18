/// <reference path="../libraries/p5.global-mode.d.ts" />

function setup() {
    createCanvas(500, 500);
    background(255);
    stroke(0)

    strokeWeight(5)
    queen(1)

}

function queen(size) {
    left(size)
    right(size, 500 / size)
}

function left(d) {
    line(150 / d, 400 / d, 100 / d, 150 / d)
    line(175 / d, 300 / d, 100 / d, 150 / d)
    line(175 / d, 300 / d, 175 / d, 120 / d)
    line(220 / d, 250 / d, 175 / d, 120 / d)
    line(220 / d, 250 / d, 250 / d, 90 / d)
    line(150 / d, 400 / d, 250 / d, 400 / d)
}

function right(d, x) {
    line(x - 150 / d, 400 / d, x - 100 / d, 150 / d)
    line(x - 175 / d, 300 / d, x - 100 / d, 150 / d)
    line(x - 175 / d, 300 / d, x - 175 / d, 120 / d)
    line(x - 220 / d, 250 / d, x - 175 / d, 120 / d)
    line(x - 220 / d, 250 / d, x - 250 / d, 90 / d)
    line(x - 150 / d, 400 / d, x - 250 / d, 400 / d)
}





function draw() {}