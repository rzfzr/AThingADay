/// <reference path="../libraries/p5.global-mode.d.ts" />

function setup() {
    createCanvas(400, 400, WEBGL);
}

function draw() {
    background(220);
    rotateX(frameCount * 0.01);
    // rotateY(frameCount * 0.01);
    rotateZ(frameCount * 0.01);

    translate(mouseX - width / 2, mouseY - height / 2)
    for (let i = 0; i < 2; i++) {
        draw3D(i)
    }
}


function draw3D(n) {
    rotate(PI / 1)
    translate(p5.Vector.fromAngle(millis() / 1000, 10));
    torus(100);
    cone(100)
}