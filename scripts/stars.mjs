class point {
    constructor(x, y, velocity, cIndex) {
        this.x = x;
        this.y = y;
        this.velocity = velocity;
        this.cIndex = cIndex;
    }
}
let pointList = [];
let ctx;
let colours;

export function start(Octx, simpleColours){
    ctx = Octx;
    colours = simpleColours;
    anim();
}

function anim() {

    ctx.beginPath();
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.fill();

    updatePoints();
    makePoints();
    drawPoints();

    requestAnimationFrame(anim)
}

function updatePoints() {

    for (let p of pointList) {
        p.x = p.x + p.velocity;

        if (p.x > ctx.canvas.width || p.x < 0 ) {
            pointList.splice(pointList.indexOf(p), 1);
        } else {

            if (p.cIndex == 14) {
                p.cIndex = 0;
            } else {
                p.cIndex++;
            }
        }
    }
}

function makePoints() {

    for (let i = 0; i <= ctx.canvas.height; i++) {
        let rand = (Math.random() * 1000);
        if (rand <= 5) {
            let temp = new point(0, i, (Math.random() * 2) + 1, Math.round(Math.random() * 2));
            pointList.push(temp);
        }
    }
}

function drawPoints() {

    for (let p of pointList) {
        ctx.fillStyle = colours[p.cIndex/5];
        ctx.beginPath();
        ctx.fillRect(p.x, p.y, 1, 1);
        ctx.fill();
    }
}