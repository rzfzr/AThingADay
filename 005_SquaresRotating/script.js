/// <reference path="../libraries/p5.global-mode.d.ts" />


var script = document.createElement('script');

function setup() {
    createCanvas(400, 400);
}

function drawSquare(n) {
    rotate(PI / 10)
    translate(p5.Vector.fromAngle(millis() / 1000, 10));
    rect(0, 0, width / 4, height / 4);
}

function draw() {
    background(50);
    noFill()
    stroke(255)
    translate(width / 2, height / 2);
    for (let i = 0; i < 20; i++) {
        drawSquare(i)
    }
}