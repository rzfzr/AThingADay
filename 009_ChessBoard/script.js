/// <reference path="../libraries/p5.global-mode.d.ts" />

function setup() {
    createCanvas(400, 400);
    background(230);
    stroke(0)

    // for (let x = 0; x < 4; x++) {
    //     for (let y = 0; y < 4; y++) {
    //         let xColor = x % 2 // so pode ser 0 ou 1
    //         let yColor = y % 2 // so pode ser 0 ou 1
    //         createP('x: ' + x + ' y: ' + y + ' xColor: ' + xColor + ' yColor: ' + yColor)
    //         createP('theLogic: ' + (xColor == yColor))
    //         let theLogic = (xColor == yColor)
    //         fill(theLogic * 255)
    //         rect(x * 100, y * 100, 100, 100)
    //     }
    // }
    for (let x = 0; x < 4; x++) {
        for (let y = 0; y < 4; y++) {
            fill((x % 2 == y % 2) ? 255 : 60)
            rect(x * 100, y * 100, 100, 100)
        }
    }
}

function draw() {}