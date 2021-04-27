/// <reference path="../libraries/p5.global-mode.d.ts" />
// from https://p5js.org/reference/#/p5/box
function setup() {
    createCanvas(400, 400, WEBGL);
}

function draw() {
    background(220);
    rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.01);
    box(100);
}