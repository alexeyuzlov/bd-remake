import '../styles/style.scss';

const bodyEl = document.body;

const canvasEl = document.createElement('canvas');
canvasEl.classList.add('canvas');
resize();

function resize() {
    canvasEl.width = bodyEl.clientWidth;
    canvasEl.height = bodyEl.clientHeight;
}

document.addEventListener('resize', () => {
    resize();
});

let x = 10;
let y = 100;
let step = 10;
let ballSize = 10;

document.addEventListener('keydown', (e) => {
    if (e.code === 'ArrowRight') {
        x += step;
    } else if (e.code === 'ArrowLeft') {
        x -= step;
    }
});

bodyEl.appendChild(canvasEl);

const ctx = canvasEl.getContext('2d');

function player() {
    ctx.beginPath();
    ctx.arc(x, y, ballSize, 0, Math.PI * 2);
    ctx.fillStyle = '#0095DD';
    ctx.fill();
    ctx.closePath();
}

function draw() {
    ctx.clearRect(0, 0, canvasEl.width, canvasEl.height);

    y = y + ballSize < canvasEl.height ? y + 1 : y - 1;

    player();

    requestAnimationFrame(draw);
}

draw();