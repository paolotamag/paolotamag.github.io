
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

let width, height;
let mouseX = 0, mouseY = 0;
const circles = [];
const circleRadius = 2.5; // Halved the radius from 5 to 2.5
const circleCount = 100; // Number of circles

const colorSequence = [
    '#DF825A', '#E57F55', '#EA9A65', '#EFBD84', '#E3D6B2',
    '#E3D5A7', '#BBD2CE', '#C0D9CB', '#99BCC8', '#75A0C5',
    '#7699C3', '#8BB2D1', '#88A9C9', '#92B1CC', '#7A9DC2',
    '#89ACC7', '#9BAAB0', '#BDB7A0', '#C19587', '#E6B381'
];
let colorIndex = 0;
let transitionProgress = 0;

const cycleTimeInMs = 4 * 60 * 1000; // 4 minutes in milliseconds
const transitionsPerCycle = colorSequence.length;
const msPerTransition = cycleTimeInMs / transitionsPerCycle;
const framesPerSecond = 60; // Assuming 60 FPS
const transitionSpeed = 1 / (msPerTransition / (1000 / framesPerSecond));

function resizeCanvas() {
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;
}

function interpolateColor(color1, color2, factor) {
    const result = color1.slice();
    for (let i = 0; i < 3; i++) {
        result[i] = Math.round(result[i] + factor * (color2[i] - color1[i]));
    }
    return result;
}

function hexToRgb(hex) {
    const bigint = parseInt(hex.slice(1), 16);
    return [(bigint >> 16) & 255, (bigint >> 8) & 255, bigint & 255];
}

function getCurrentColor() {
    const currentColor = hexToRgb(colorSequence[colorIndex]);
    const nextColor = hexToRgb(colorSequence[(colorIndex + 1) % colorSequence.length]);
    const interpolated = interpolateColor(currentColor, nextColor, transitionProgress);
    return `rgba(${interpolated[0]}, ${interpolated[1]}, ${interpolated[2]}, 0.7)`;
}

class Circle {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.velocity = {
            x: (Math.random() - 0.5) * 1, // Halved the speed
            y: (Math.random() - 0.5) * 1  // Halved the speed
        };
    }

    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, circleRadius, 0, Math.PI * 2);
        ctx.fillStyle = getCurrentColor();
        ctx.fill();
        ctx.closePath();
    }

    update() {
        this.x += this.velocity.x;
        this.y += this.velocity.y;

        if (this.x + circleRadius > width || this.x - circleRadius < 0) {
            this.velocity.x = -this.velocity.x;
        }
        if (this.y + circleRadius > height || this.y - circleRadius < 0) {
            this.velocity.y = -this.velocity.y;
        }

        const dx = mouseX - this.x;
        const dy = mouseY - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 100) {
            this.x -= dx * 0.025; // Halved the reaction speed
            this.y -= dy * 0.025; // Halved the reaction speed
        }

        this.draw();
    }
}

function createCircles() {
    for (let i = 0; i < circleCount; i++) {
        const x = Math.random() * width;
        const y = Math.random() * height;
        circles.push(new Circle(x, y));
    }
}

function animate() {
    ctx.clearRect(0, 0, width, height);

    circles.forEach(circle => circle.update());

    transitionProgress += transitionSpeed;
    if (transitionProgress >= 1) {
        transitionProgress = 0;
        colorIndex = (colorIndex + 1) % colorSequence.length;
    }

    requestAnimationFrame(animate);
}

window.addEventListener('resize', resizeCanvas);
window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

resizeCanvas();
createCircles();
animate();
