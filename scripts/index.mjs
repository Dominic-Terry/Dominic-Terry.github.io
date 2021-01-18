import { device } from './identify.mjs';


let colours = {
    text: getComputedStyle(document.documentElement).getPropertyValue('--text'),
    bg: getComputedStyle(document.documentElement).getPropertyValue('--bg'),
    darktext: getComputedStyle(document.documentElement).getPropertyValue('--dark-text'),
    dark: getComputedStyle(document.documentElement).getPropertyValue('--dark'),
    mid: getComputedStyle(document.documentElement).getPropertyValue('--mid'),
    light: getComputedStyle(document.documentElement).getPropertyValue('--light'),
}


const vw = (Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)) / 100; // worth 1 view width as percentage
const vh = (Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)) / 100; // worth 1 view height as percentage


let ctx = document.querySelector("#indexCanvas")?.getContext("2d");

//add update canvas call and resive function
function updateCanvasSize() {
    ctx.canvas.width = window.innerWidth;
    ctx.canvas.height = window.innerHeight;
}
window.addEventListener("resize", updateCanvasSize);
updateCanvasSize();


// start animation
import { start } from './stars.mjs';
start(ctx,[colours.light, colours.mid, colours.dark]);