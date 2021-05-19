/// <reference path="../libraries/p5.global-mode.d.ts" />
let p

function setup() {
    createCanvas(400, 400, WEBGL);
}

function draw() {
    frameRate(10)
    background(220);
    if (p) p.remove()
    let size = 100
    let c = color(mouseX, mouseY, mouseX - mouseY)
    fill(c)
    rect(mouseX - width / 2 - size / 2, mouseY - height / 2 - size / 2, size)
    rotate(PI / 10)
    translate(p5.Vector.fromAngle(millis() / 1000, 100));
    fill(color(random(mouseX), random(mouseY), random(mouseX - mouseY)))
    ellipse(mouseX - width / 2 - size, mouseY - height / 2 - size, size)
    fill(color(random(mouseX), random(mouseY), random(mouseX - mouseY)))
    ellipse(mouseX - width / 2 + size, mouseY - height / 2 - size, size)
    fill(color(random(mouseX), random(mouseY), random(mouseX - mouseY)))
    ellipse(mouseX - width / 2 - size, mouseY - height / 2 + size, size)
    fill(color(random(mouseX), random(mouseY), random(mouseX - mouseY)))
    ellipse(mouseX - width / 2 + size, mouseY - height / 2 + size, size)
}