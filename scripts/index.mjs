import { device } from './identify.mjs';


let colours = {
    text: getComputedStyle(document.documentElement).getPropertyValue('--text'),
    bg: getComputedStyle(document.documentElement).getPropertyValue('--bg'),
    darktext: getComputedStyle(document.documentElement).getPropertyValue('--dark-text'),
    dark: getComputedStyle(document.documentElement).getPropertyValue('--dark'),
    mid: getComputedStyle(document.documentElement).getPropertyValue('--mid'),
    light: getComputedStyle(document.documentElement).getPropertyValue('--light'),
}


const vw = (Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)) / 100; // worth 1 view width
const vh = (Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)) / 100; // worth 1 view height


let ctx = document.querySelector("#indexCanvas")?.getContext("2d");

function updateCanvasSize() {
    ctx.canvas.width = window.innerWidth;
    ctx.canvas.height = window.innerHeight;
}

window.addEventListener("resize", updateCanvasSize);
updateCanvasSize();


// class point {
//     constructor(x, y, velocity, cIndex) {
//         this.x = x;
//         this.y = y;
//         this.velocity = velocity;
//         this.cIndex = cIndex;
//     }
// }

// let pointList = [];

import { start } from './stars.mjs';


start(ctx,[colours.light, colours.mid, colours.dark]);

// function anim() {

//     ctx.beginPath();
//     ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
//     ctx.fill();

//     updatePoints();
//     makePoints();
//     drawPoints();

//     requestAnimationFrame(anim)
// }

// function updatePoints() {

//     for (let p of pointList) {
//         p.x = p.x + p.velocity;

//         if (p.x > ctx.canvas.width) {

//             pointList.splice(pointList.indexOf(p), 1);
//         } else {

//             if (p.cIndex == 14) {
//                 p.cIndex = 0;
//             } else {
//                 p.cIndex++;
//             }

//         }

//     }

// }

// function makePoints() {

//     for (let i = 0; i <= ctx.canvas.height; i++) {
//         let rand = (Math.random() * 1000);
//         if (rand <= 5) {
//             let temp = new point(0, i, (Math.random() * 3) + 1, Math.round(Math.random() * 2));
//             pointList.push(temp);
//         }
//     }
// }

// function drawPoints() {

//     for (let p of pointList) {
//         ctx.fillStyle = simpleColours[p.cIndex/5];
//         ctx.beginPath();
//         ctx.fillRect(p.x, p.y, 1, 1);
//         ctx.fill();
//     }
// }





