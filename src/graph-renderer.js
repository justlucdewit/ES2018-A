window.canvas = undefined;
window.ctx = undefined;
const guideCount = { x: 3, y: 10 };
const lineDetail = 1 / 10;

const drawBackground = () => {
    ctx.fillStyle = '#fff';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}

const drawGuideLines = () => {
    ctx.strokeStyle = '#ccc';

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

    ctx.beginPath();
    ctx.moveTo(points[0].x, points[0].y);
    points.splice(1, points.length).forEach(point => {
        ctx.lineTo(point.x, point.y);
    });

    ctx.stroke();

    ctx.ellipse(n * canvas.width, canvas.height - evaluateFormula(formula, n) * canvas.height, 5, 5, 0, 0, Math.PI * 2)

}

const renderFormulas = (formulas, n) => {
    drawBackground();
    drawGuideLines();
    drawSliderLine(n);

    const colors = ['red', 'blue', 'green', 'black', 'cyan', 'purple'];

    formulas.forEach((f, i) => {
        drawFormula(f, colors[i % colors.length], n)
    });
}

const drawSliderLine = (n) => {
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