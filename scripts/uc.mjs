import { start } from './stars.mjs';let ctx = document.querySelector("#ucCanvas")?.getContext("2d");



let colours = {
    text: getComputedStyle(document.documentElement).getPropertyValue('--text'),
    bg: getComputedStyle(document.documentElement).getPropertyValue('--bg'),
    darktext: getComputedStyle(document.documentElement).getPropertyValue('--dark-text'),
    dark: getComputedStyle(document.documentElement).getPropertyValue('--dark'),
    mid: getComputedStyle(document.documentElement).getPropertyValue('--mid'),
    light: getComputedStyle(document.documentElement).getPropertyValue('--light'),
}

window.addEventListener("resize", updateCanvasSize);
updateCanvasSize();
start(ctx,[colours.light, colours.mid, colours.dark]);

function updateCanvasSize() {
    ctx.canvas.width = window.innerWidth;
    ctx.canvas.height = window.innerHeight;
}