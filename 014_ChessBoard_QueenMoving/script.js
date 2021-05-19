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
    createCanvas(400, 400);
    board()
    frameRate(4)

    queens.forEach(q => {
        let t = target
        if (q.x < t.x) q.x++
        if (q.x > t.x) q.x--
        if (q.y < t.y) q.y++
        if (q.y > t.y) q.y--

        drawQueen(q.x, q.y)

    })

}

function mousePressed() {
    let x = Math.floor(mouseX / 100)
    let y = Math.floor(mouseY / 100)
    target = {
        x,
        y
    }
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
    triangle(x * 100 + 80, y * 100 + 10, x * 100 + 10, y * 100 + 90, x * 100 + 90, y * 100 + 90);
    triangle(x * 100 + 20, y * 100 + 10, x * 100 + 10, y * 100 + 90, x * 100 + 90, y * 100 + 90);
}