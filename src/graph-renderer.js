window.canvas = undefined;
window.ctx = undefined;
const guideCount = { x: 3, y: 10 };
const lineDetail = 1 / 10;

const drawBackground = () => {
    ctx.lineWidth = 1;
    ctx.fillStyle = '#fff';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}

const drawGuideLines = () => {
    ctx.strokeStyle = '#ccc';
    ctx.lineWidth = 1;

    const guideStepX = canvas.width / guideCount.x;
    const guideStepY = canvas.height / guideCount.y;

    for (let x = 0; x <= canvas.width; x += guideStepX) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
    }

    for (let y = 0; y <= canvas.height; y += guideStepY) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
    }
}

const evaluateFormula = (formula, t) => {
    const f = formula.replace(/t/g, t);
    return (new Function(`return t => ${formula}`))()(t);
}

const drawFormula = (formula, color, n) => {
    ctx.strokeStyle = color
    const points = []
    
    for (let x = 0; x <= 1; x += lineDetail) {
        const pos = { x: x * canvas.width, y: canvas.height - evaluateFormula(formula, x) * canvas.height };
        points.push(pos);
    }

    // Draw the line
    ctx.beginPath();
    ctx.moveTo(points[0].x, points[0].y);
    points.splice(1, points.length).forEach(point => {
        ctx.lineTo(point.x, point.y);
    });

    ctx.lineWidth = 1;
    ctx.stroke();

    // Draw circle with value inside
    const indicator_radius = 15;

    // Magic number as arc degrees, no idea why Math.PI * 2 doesn't work :(
    const magic_number = Math.PI * 2 + 2.4;

    // The value at x = n
    const value = evaluateFormula(formula, n);

    // The number of digits to round indicator to
    const rounding_digits = 2;

    // Draw the indicator for the line
    ctx.beginPath();
    ctx.arc(n * canvas.width, canvas.height - value * canvas.height, indicator_radius, indicator_radius, magic_number)
    ctx.fillStyle = "white"
    ctx.strokeStyle = color;
    ctx.lineWidth = 2;
    ctx.stroke
    ctx.fill();
    ctx.stroke();

    // Draw the value inside the circle
    ctx.font = "12px Arial";
    ctx.fillStyle = color;
    
    ctx.fillText(Number(value).toFixed(rounding_digits), n * canvas.width - 10, canvas.height - value * canvas.height + 4);
}

const renderFormulas = (formulas, n) => {
    if (ctx === undefined)
        return

    drawBackground();
    drawGuideLines();
    drawSliderLine(n);

    const colors = ['red', 'blue', 'green', 'black', 'cyan', 'purple'];

    formulas.forEach((f, i) => {
        drawFormula(f, colors[i % colors.length], n)
    });
}

const drawSliderLine = (n) => {
    ctx.lineWidth = 1;
    ctx.strokeStyle = 'red'
    ctx.beginPath();
    ctx.moveTo(n * canvas.width, 0);
    ctx.lineTo(n * canvas.width, canvas.height);
    ctx.stroke();
}

setTimeout(() => {
    canvas = document.getElementById('graph-canvas');
    ctx = canvas.getContext('2d');

    renderFormulas([], 0.5)
}, 500)

module.exports = { renderFormulas }