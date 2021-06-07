/// <reference path="../libraries/p5.global-mode.d.ts" />

function setup() {
    createCanvas(500, 500, WEBGL);
}

function draw() {
    // frameRate(10)
    background(220);
    rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.01);


    for (let i = 0; i < 5; i++) {
        box(mouseX + 100 * i, mouseY);
        box(mouseY + 100 * i, mouseX);
    }
}