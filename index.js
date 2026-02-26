const canvas = document.getElementById("drawing-canvas")
const context = canvas.getContext("2d")
const canvas_height = 500
const canvas_width = 800
const canvas_background_color = "#f0f0f0"

const clearButton = document.getElementById("clear-canvas-button")


let isDrawing = false;

let mouseStartPosition = [null, null]

function initCanvas() {
    canvas.height = canvas_height;
    canvas.width = canvas_width;
    canvas.style.background = canvas_background_color;
}

function draw(e) {
    mousePosition = [e.offsetX, e.offsetY]

    if (!isDrawing) return;

    context.lineTo(mousePosition[0], mousePosition[1])
    context.stroke()
}

function clearCanvas() {
    context.clearRect(0, 0, canvas.width, canvas.height)
    context.beginPath()
}



canvas.addEventListener("mousedown", (e) => {
    isDrawing = true;
    context.moveTo(e.offsetX, e.offsetY)
});
canvas.addEventListener("mouseup", () => isDrawing = false);
canvas.addEventListener("mouseleave", () => isDrawing = false);
canvas.addEventListener("mousemove", draw);

clearButton.addEventListener("click", clearCanvas)

initCanvas();