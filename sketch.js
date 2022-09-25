let angle = 0
let velocity
let toruses
let bg
let thickness
let seed = []
let d1, d2, d3

function setup() {
    createCanvas(window.innerWidth*0.98, window.innerHeight*0.96, WEBGL)
    noStroke()
    switchCircles()
}

function switchCircles() {
    d1 = randomGaussian(-1, 1)
    d2 = randomGaussian(-1, 1)
    d3 = randomGaussian(-1, 1)
    velocity = randomGaussian()
    toruses = random(1, 15)
    thickness = random(0.01, 0.999)
    switchColors()
}

function switchColors() {
    bg = color(random(255), random(255), random(255))
    for (let i = 0; i < toruses; i++) {
        seed[i] = (color(random(255), random(255), random(255)))
    }
}

let d = 1
function makeTorus() {
    for (let i = 0; i < toruses; i++) {
        push()
        fill(seed[i])
        rotateX(d1 * angle * 0.09 * i * velocity)
        rotateY(d2 * angle * 0.09 * i * velocity)
        rotateZ(d3 * angle * 0.09 * i * velocity)
        torus(50 * i, 10 * i * thickness / 2)
        pop()
    }

    if (angle > 180 || angle < 0) {
        d *= -1
    } else {
        angle += d*0.07
    }
}

function draw() {
    background(bg)
    //rectMode(CENTER)
    makeTorus()
}

function keyPressed() {
    switchCircles()
}

function mouseClicked() {
    switchColors()
}