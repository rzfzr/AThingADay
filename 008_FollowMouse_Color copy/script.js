/// <reference path="../libraries/p5.global-mode.d.ts" />
let p

function setup() {
    createCanvas(400, 400, WEBGL);
}

function draw() {
    background(220);
    if (p) p.remove()
    let size = 100
    let c = color(mouseX, mouseY, mouseX - mouseY)
    fill(c)
    rect(mouseX - width / 2 - size / 2, mouseY - height / 2 - size / 2, size)
    p = createP(c)
}