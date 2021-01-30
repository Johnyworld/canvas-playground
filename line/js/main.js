const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

ctx.beginPath();
ctx.strokeStyle = '#098'
ctx.moveTo(400, 100);
ctx.lineTo(450, 50);
ctx.moveTo(150, 150);
ctx.lineTo(200, 200);
ctx.closePath();

ctx.moveTo(300, 300);
ctx.quadraticCurveTo(350, 390, 400, 400);

// Clip a rectangular area
ctx.moveTo(110, 60);
ctx.arc(60, 60, 50, 0, Math.PI*2);
ctx.stroke();
ctx.clip();

// Draw red rectangle after clip()
ctx.fillStyle = "red";
ctx.fillRect(0, 0, 55, 25);

